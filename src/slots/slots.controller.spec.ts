import { Test, TestingModule } from '@nestjs/testing';
import { SlotController } from './slots.controller';

describe('SlotsController', () => {
  let controller: SlotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlotController],
    }).compile();

    controller = module.get<SlotController>(SlotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
