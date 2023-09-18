import { Module } from '@nestjs/common';
import { SlotService } from './slots.service';
import { SlotController } from './slots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slot } from './slot.entity/slot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slot])],
  providers: [SlotService],
  controllers: [SlotController]
})
export class SlotsModule {}
