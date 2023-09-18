import { Module } from '@nestjs/common';
import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientController],
  exports: [ClientService] 
})
export class ClientsModule {}
