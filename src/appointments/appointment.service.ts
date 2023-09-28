import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Appointment } from './appointment.entity/appointment.entity';
import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';
import { Address } from '../clients/client.entity/address.entity';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectRepository(Appointment)
        private appointmentsRepository: Repository<Appointment>,
        private readonly entityManager: EntityManager
    ) {}

    async findAll(): Promise<Appointment[]> {
        return await this.appointmentsRepository.find({
            relations: ['team', 'address']
        });
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
        const appointments = await this.entityManager.find(Appointment, {
            select: ['id', 'startDate', 'endDate', 'address', 'comments'],
            where: {
                address: { id: addressId }
            },
            relations: ['address', 'team']
        });
    
        if (!appointments || appointments.length === 0) {
            throw new NotFoundException(`No appointments found for address with ID ${addressId}`);
        }
    
        return appointments;
    }

    async findAppointmentsByAddressAndTeam(addressId: string, teamId: number): Promise<Appointment[]> {
        const appointments = await this.entityManager.find(Appointment, {
            select: ['id', 'startDate', 'endDate', 'address', 'comments'],
            where: {
                team: { id: teamId }
            },
            relations: ['address', 'team']
        });
    
        if (!appointments || appointments.length === 0) {
            throw new NotFoundException(`No appointments found for team with ID ${teamId}`);
        }
    
        for (const appointment of appointments) {
            if (appointment.address.id !== addressId) {
                appointment.address = null;
                appointment.comments = null;
            }
        }
    
        return appointments;
    }
}
