import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppointmentsService } from './appointment.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';
import { Appointment } from './appointment.entity/appointment.entity';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Get()
    findAll(): Promise<Appointment[]> {
        return this.appointmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Appointment> {
        return this.appointmentsService.findOne(id);
    }

    @Post()
    create(@Body() createDto: CreateAppointmentDto): Promise<Appointment> {
        return this.appointmentsService.create(createDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateDto: UpdateAppointmentDto): Promise<Appointment> {
        return this.appointmentsService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.appointmentsService.remove(id);
    }

    @Get('address/:id')
    async findAppointmentsByAddress(@Param('id') id: string): Promise<Appointment[]> {
      return await this.appointmentsService.findAppointmentsByAddress(id);
    }

    @Get('address/:addressId/team/:teamId')
    async findAppointmentsByAddresAndTeam(@Param('addressId') addreessId: string, @Param('teamId') teamId: number): Promise<Appointment[]> {
      return await this.appointmentsService.findAppointmentsByAddressAndTeam(addreessId, teamId);
    }
}
