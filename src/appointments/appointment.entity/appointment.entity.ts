import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Address } from '../../clients/client.entity/address.entity'; 
import { Team } from '../../teams/team.entity/team.entity';
import { Client } from '../../clients/client.entity/client.entity';

@Entity('Appointments')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', name: 'startDate' })
    startDate: Date;

    @Column({ type: 'timestamp', name: 'endDate' })
    endDate: Date;

    @Column({ type: 'text', nullable: true }) 
    comments: string;

    @ManyToOne(() => Client, client => client.id)
    @JoinColumn({ name: 'addressId' })
    address: Address;

    @ManyToOne(() => Team, team => team.id)
    @JoinColumn({ name: 'teamId' })
    team: Team;
}
