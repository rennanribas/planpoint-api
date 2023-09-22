import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './clients/clients.module';
import { AppointmentsModule } from './appointments/appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './teams/teams.module';

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
    ClientModule,
    AppointmentsModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
