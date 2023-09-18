import { Appointment } from 'src/appointment/appointment.entity/appointment.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';

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
}
