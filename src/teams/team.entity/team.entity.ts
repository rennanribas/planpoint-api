import { Appointment } from '../../appointments/appointment.entity/appointment.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany
} from 'typeorm';
import { Availability } from './availability.entity';

@Entity('Teams')
export class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @OneToMany(() => Appointment, appointment => appointment.team)
    appointments: Appointment[];

    @OneToMany(() => Availability, availability => availability.team, { cascade: true })
    availabilities: Availability[];
}