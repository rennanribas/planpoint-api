import { Between, Connection } from 'typeorm';
import { Client } from '../clients/client.entity/client.entity';
import { Team } from '../teams/team.entity/team.entity';
import { Appointment } from '../appointments/appointment.entity/appointment.entity';
import { add, addDays, addMinutes, endOfWeek, getDay, getHours, setHours, startOfWeek } from 'date-fns';
import { Availability } from '../teams/team.entity/availability.entity';
import { IntervalPsql, WeekDay } from '../enums';
import { isStringObject } from 'util/types';

export default class AppointmentSeeder {
    public static async run(connection: Connection): Promise<void> {
        const appointmentRepo = connection.getRepository(Appointment);
        const teamRepo = connection.getRepository(Team);
        const clientRepo = connection.getRepository(Client);
        const availabilityRepo = connection.getRepository(Availability);

        const teams = await teamRepo.find();
        const clients = await clientRepo.find({ relations: ["addresses"] });

        let currentDate = addDays(new Date(), 1);

        for (const client of clients) {
            while (getDay(currentDate) === 0) {
                currentDate = addDays(currentDate, 1);
            }

            for (const team of teams) {
                const existingAppointments = await appointmentRepo.find({
                    where: { team: team, startDate: currentDate },
                    relations: ["team"],
                });

                if (existingAppointments.length > 0) {
                    continue;
                }

                const address = client.addresses[Math.round(Math.random())];

                const clientAppointmentsInWeek = await appointmentRepo.find({
                    where: { address: {id: address.id}, startDate: Between(startOfWeek(currentDate), endOfWeek(currentDate)) },
                });

                if (clientAppointmentsInWeek.length > 0) {
                    continue;
                }

                const teamAvailability = await availabilityRepo.findOne({
                    where: { team: team, day: WeekDay[currentDate.getDay()] },
                });

                if (!teamAvailability) {
                    continue;
                }

                const appointment = new Appointment();
                const availabilityStartTime = Number(teamAvailability.startTime.split(':')[0]);
                const availabilityEndTime = Number(teamAvailability.endTime.split(':')[0]);
                appointment.startDate = setHours(currentDate, availabilityStartTime);

                const appointmentStartTime = getHours(appointment.startDate);

                if (appointmentStartTime < availabilityStartTime || appointmentStartTime > availabilityEndTime) {
                    continue;
                }
                const {minutes, hours} = address.initialSessionDuration as IntervalPsql
                appointment.endDate = addMinutes(appointment.startDate, ((hours || 0) * 60) + (minutes || 0));
                console.log('minutes: ', minutes)
                console.log('hours: ', hours)
                console.log("appointment: ", appointment)
                console.log('duration: ', address.regularSessionDuration)
                console.log('address:', address)
                
                appointment.comments = `Appointment for ${client.name} with team ${team.name}.`;
                appointment.address = address;
                appointment.team = team;

                const overlappingAppointments = await appointmentRepo.find({
                    where: {
                        address: appointment.address,
                        startDate: Between(appointment.startDate, appointment.endDate),
                    },
                });

                if (overlappingAppointments.length > 0) {
                    continue;
                }

                await connection.manager.save(appointment);

                currentDate = addDays(currentDate, 1);
            }
        }
    }
}