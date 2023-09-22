import { Connection } from 'typeorm';
import { Client } from '../clients/client.entity/client.entity';
import { Team } from '../teams/team.entity/team.entity';
import { Address } from '../clients/client.entity/address.entity';
import { Appointment } from '../appointments/appointment.entity/appointment.entity';

export default class AppointmentSeeder {
    public static async run(connection: Connection): Promise<void> {
        const teamRepo = connection.getRepository(Team);
        const clientRepo = connection.getRepository(Client);
        const addressRepo = connection.getRepository(Address);

        const teams = await teamRepo.find();
        const clients = await clientRepo.find({ relations: ["addresses"] });

        for (const client of clients) {
            for (const team of teams) {
                const appointment = new Appointment();

                // Defina as datas conforme necessário. Estou usando um exemplo fixo aqui.
                appointment.startDate = new Date();
                appointment.endDate = new Date(appointment.startDate);
                appointment.endDate.setDate(appointment.startDate.getDate() + 1); // Supondo que o compromisso seja de um dia

                appointment.comments = `Appointment for ${client.name} with team ${team.name}.`;

                // Supondo que cada cliente tenha ao menos um endereço
                appointment.address = client.addresses[0];
                
                appointment.team = team;

                await connection.manager.save(appointment);
            }
        }
    }
}
