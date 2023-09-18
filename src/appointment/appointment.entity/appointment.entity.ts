import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Address } from '../../clients/client.entity/address.entity'; 

@Entity('Appointments')
export class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', name: 'startDate' })
    startDate: Date;

    @Column({ type: 'timestamp', name: 'endDate' })
    endDate: Date;

    @Column({ type: 'text', nullable: true }) // nullable é opcional, dependendo se você quer permitir comentários vazios ou não.
    comments: string;

    @ManyToOne(() => Address)
    address: Address;

    @Column({ type: 'uuid' })  // Se for UUID
    addressId: string;
}
