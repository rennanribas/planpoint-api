import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    Generated,
  } from 'typeorm';
  import { Client } from './client.entity';
import { Appointment } from '../../appointments/appointment.entity/appointment.entity';
import { IntervalPsql } from 'src/enums';
  
  @Entity('Addresses')
  export class Address {
      @PrimaryGeneratedColumn('uuid')
      @Generated('uuid')
      id: string;
  
      @Column({ type: 'text' })
      streetAddress: string;
  
      @Column({ type: 'varchar', length: 255 })
      city: string;
  
      @Column({ type: 'varchar', length: 100 })
      state: string;
  
      @Column({ type: 'varchar', length: 10 })
      zipCode: string;

      @Column({ type: 'interval' })
      initialSessionDuration: string;

      @Column({ type: 'interval' })
      regularSessionDuration: string;
  
      @ManyToOne(() => Client, client => client.addresses)
      client: Client;

      @OneToMany(() => Appointment, appointment => appointment.address)
      appointments: Appointment[];
  }
  