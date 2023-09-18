import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../../clients/client.entity/client.entity';
import { Appointment } from 'src/appointment/appointment.entity/appointment.entity';

@Entity('slots')
export class Slot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', name: 'start_time' })
    startTime: Date;

    @Column({ type: 'timestamp', name: 'end_time' })
    endTime: Date;

    @ManyToOne(() => Client, client => client.slots)
    client: Client;

    @OneToMany(() => Appointment, (appointment) => appointment.slot)
    appointments: Appointment[];
}
