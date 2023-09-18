import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slot } from './slot.entity/slot.entity';
import { CreateSlotDto, UpdateSlotDto } from './slots.dto';

@Injectable()
export class SlotService {
  constructor(
    @InjectRepository(Slot) private cleaningSlotsRepository: Repository<Slot>
  ) {}

  findAll(): Promise<Slot[]> {
    return this.cleaningSlotsRepository.find();
  }

  async findOne(id: number): Promise<Slot> {
    const found = await this.cleaningSlotsRepository.findOne({ where: { id } });
    if (!found) {
        throw new NotFoundException(`Slot with ID ${id} not found`);
    }
    return found;
}

  create(dto: CreateSlotDto): Promise<Slot> {
    const slot = new Slot();
    slot.startTime = dto.startTime;
    slot.endTime = dto.endTime;
    return this.cleaningSlotsRepository.save(slot);
  }

  async update(id: number, dto: UpdateSlotDto): Promise<Slot> {
    await this.cleaningSlotsRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.cleaningSlotsRepository.delete(id).then(() => {});
  }
}
