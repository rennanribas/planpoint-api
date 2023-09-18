import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SlotService } from './slots.service';
import { CreateSlotDto, UpdateSlotDto } from './slots.dto';

@Controller('slots')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  create(@Body() dto: CreateSlotDto) {
    return this.slotService.create(dto);
  }

  @Get()
  findAll() {
    return this.slotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSlotDto) {
    return this.slotService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotService.remove(+id);
  }
}
