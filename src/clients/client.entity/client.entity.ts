import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  import { Slot } from '../../slots/slot.entity/slot.entity';
  import { Address } from './address.entity';
  
  @Entity('clients')
  export class Client {
      @PrimaryGeneratedColumn()
      id: number;
  
      @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
      uid: string;
  
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
  
      @OneToMany(() => Slot, slot => slot.client, {
          cascade: true,
      })
      slots: Slot[];
  }
  