import { WeekDay } from '../../enums';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import { Team } from './team.entity';

@Entity('Availabilities')
export class Availability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: WeekDay })
    day: WeekDay;

    @Column({ type: 'time' })
    startTime: string;

    @Column({ type: 'time' })
    endTime: string;

    @ManyToOne(() => Team, team => team.availabilities)
    @JoinColumn({ name: 'teamId' })
    team: Team;

    @Column()
    teamId: number;
}

