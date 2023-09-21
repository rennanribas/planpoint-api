import { Appointment } from 'src/appointment/appointment.entity/appointment.entity';
import { WeekDay } from 'src/enums';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany
} from 'typeorm';
import { Team } from './team.entity';

@Entity('Availability')
export class Availability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: WeekDay })
    day: WeekDay;

    @Column({ type: 'time' })
    startTime: string;

    @Column({ type: 'time' })
    endTime: string;

    @ManyToMany(() => Team, team => team.availabilities)
    team: Team;
}

