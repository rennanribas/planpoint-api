import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { SlotsModule } from './slots/slots.module';
import { AppointmentsModule } from './appointment/appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './clients/clients.controller';
import { AppointmentsController } from './appointment/appointment.controller';
import { SlotController } from './slots/slots.controller';
import { ClientService } from './clients/clients.service';
import { SlotService } from './slots/slots.service';
import { AppointmentsService } from './appointment/appointment.service';
import { Appointment } from './appointment/appointment.entity/appointment.entity';
import { Client } from './clients/client.entity/client.entity';
import { Slot } from './slots/slot.entity/slot.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  // Database type
      host: 'localhost',  // Database host
      port: 5432,        // Database port
      username: 'root',  // Database username
      password: 'clean123',  // Database password
      database: 'cleaning_schedule_db',  // Database name
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],

      // Synchronize should be turned off in production for safety!
      synchronize: false,
}),
    ClientsModule,
    SlotsModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
