import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Appointment } from './appointment.entity/appointment.entity';
import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';
import { Address } from 'src/clients/client.entity/address.entity';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectRepository(Appointment)
        private appointmentsRepository: Repository<Appointment>,
        private readonly entityManager: EntityManager
    ) {}

    findAll(): Promise<Appointment[]> {
        return this.appointmentsRepository.find();
    }

    async findOne(id: number): Promise<Appointment> {
        const found = await this.appointmentsRepository.findOne({ where: { id } });
        if (!found) {
            throw new NotFoundException(`Appointment with ID ${id} not found`);
        }
        return found;
    }

    async create(createDto: CreateAppointmentDto): Promise<Appointment> {
        const season = new Appointment();
        Object.assign(season, createDto);
        return this.appointmentsRepository.save(season);
    }

    async update(id: number, updateDto: UpdateAppointmentDto): Promise<Appointment> {
        await this.appointmentsRepository.update(id, updateDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.appointmentsRepository.delete(id);
    }

    async findAppointmentsByAddress(addressId: string): Promise<Appointment[]> {
        const addressWithAppointments = await this.entityManager.findOne(Address, {
            where: { id: addressId },
            relations: ['appointments']
        });
        
    
        if (!addressWithAppointments) {
            throw new NotFoundException(`Address with ID ${addressId} not found`);
        }
    
        return addressWithAppointments.appointments;
    }
}
