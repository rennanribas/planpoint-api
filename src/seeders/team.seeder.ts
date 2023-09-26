import { Team } from '../teams/team.entity/team.entity';
import { Availability } from '../teams/team.entity/availability.entity';
import { Connection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { WeekDay } from '../enums';

export default class TeamSeeder {
    public static async run(connection: Connection): Promise<void> {
        const teams = [];
        const totalTeams = 5;

        for (let i = 1; i <= totalTeams; i++) {
            const team = new Team();
            team.uuid = uuidv4();
            team.name = `Team Alpha ${i}`;
            team.description = `Description for Team Alpha ${i}`;

            const defaultStartTime = '09:00:00';
            const defaultEndTime = '18:00:00';
            const saturdayEndTime = '12:00:00';
            
            const availabilities: Availability[] = [];

            for (const day of Object.values(WeekDay)) {
                const availability = new Availability();
                availability.day = day;
                availability.startTime = defaultStartTime;
                availability.endTime = day === WeekDay.Saturday ? saturdayEndTime : defaultEndTime;
                availability.team = team;

                availabilities.push(availability);
            }
            
            team.availabilities = availabilities;

            teams.push(team);
        }

        for (const team of teams) {
            await connection.manager.save(team);
        }
    }
}
