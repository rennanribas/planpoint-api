import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
  import { Address } from './address.entity';
  
  @Entity('Clients')
  export class Client {
      @PrimaryGeneratedColumn('uuid')
      id: string;
  
      @Column({ length: 100 })
      name: string;
  
      @Column()
      email: string;
  
      @Column()
      phoneNumber: string;
  
      @OneToMany(() => Address, addresses => addresses.client, {
        cascade: true,
      })
      addresses: Address[];
  }
  