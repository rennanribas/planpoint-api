import { Connection } from 'typeorm';
import { Client } from '../clients/client.entity/client.entity';
import { Team } from '../teams/team.entity/team.entity';
import { Address } from '../clients/client.entity/address.entity';
import { Appointment } from '../appointments/appointment.entity/appointment.entity';
import { addDays, getDay, setHours } from 'date-fns';

export default class AppointmentSeeder {
    public static async run(connection: Connection): Promise<void> {
        const teamRepo = connection.getRepository(Team);
        const clientRepo = connection.getRepository(Client);
        const addressRepo = connection.getRepository(Address);

        const teams = await teamRepo.find();
        const clients = await clientRepo.find({ relations: ["addresses"] });

        // Defina a data de início para amanhã
let currentDate = addDays(new Date(), 1);

// Para cada cliente
for (const client of clients) {
    // Se o dia atual é um domingo, avance para a próxima segunda-feira
    while (getDay(currentDate) === 0) {
        currentDate = addDays(currentDate, 1);
    }

    // Atribua horários para cada equipe
    for (const team of teams) {
        const appointment = new Appointment();

        // Defina o horário de início para 9:00 no dia atual
        appointment.startDate = setHours(currentDate, 9);
        
        // Se for sábado, o horário de término é 12:00; caso contrário, 18:00
        if (getDay(currentDate) === 6) {
            appointment.endDate = setHours(currentDate, 12);
        } else {
            appointment.endDate = setHours(currentDate, 18);
        }

        appointment.comments = `Appointment for ${client.name} with team ${team.name}.`;
        appointment.address = client.addresses[Math.round(Math.random())];
        appointment.team = team;

        await connection.manager.save(appointment);

        // Avance para o próximo dia
        currentDate = addDays(currentDate, 1);
    }
}
    }
}
