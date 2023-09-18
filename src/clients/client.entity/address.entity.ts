import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    ManyToOne,
  } from 'typeorm';
  import { Client } from './client.entity';
  
  @Entity('addresses')
  export class Address {
      @PrimaryGeneratedColumn()
      id: number;
  
      @Column({ type: 'text' })
      streetAddress: string;
  
      @Column({ type: 'varchar', length: 255 })
      city: string;
  
      @Column({ type: 'varchar', length: 100 })
      state: string;
  
      @Column({ type: 'varchar', length: 10 })
      zipCode: string;
  
      @ManyToOne(() => Client, client => client.addresses)
      client: Client;
  }
  