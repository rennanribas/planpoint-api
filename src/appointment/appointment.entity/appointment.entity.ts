import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Address } from '../../clients/client.entity/address.entity'; 
import { Team } from 'src/teams/team.entity/team.entity';

@Entity('Appointments')
export class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', name: 'startDate' })
    startDate: Date;

    @Column({ type: 'timestamp', name: 'endDate' })
    endDate: Date;

    @Column({ type: 'text', nullable: true }) 
    comments: string;

    @ManyToOne(() => Address)
    address: Address;

    @Column({ type: 'uuid' })
    addressId: string;


    @ManyToOne(() => Team)
    team: Team;

    @Column({ type: 'uuid' })
    teamId: string;
}
