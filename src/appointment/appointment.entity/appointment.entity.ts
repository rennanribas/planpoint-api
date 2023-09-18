import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Slot } from '../../slots/slot.entity/slot.entity';

@Entity('appointments')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', name: 'startDate' })
    startDate: Date;

    @Column({ type: 'date', name: 'endDate' })
    endDate: Date;

    @ManyToOne(() => Slot, (slot) => slot.appointments)
    @JoinColumn({ name: 'slotId' })
    slot: Slot;
}
