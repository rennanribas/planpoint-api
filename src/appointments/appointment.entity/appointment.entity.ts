import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Address } from '../../clients/client.entity/address.entity'; 
import { Team } from '../../teams/team.entity/team.entity';

@Entity('Appointments')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @Column({ type: 'text', nullable: true }) 
    comments: string;

    @ManyToOne(() => Address, address => address.appointments)
    @JoinColumn({ name: 'addressId' })
    address: Address;

    @ManyToOne(() => Team, team => team.id)
    @JoinColumn({ name: 'teamId' })
    team: Team;
}
