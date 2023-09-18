export class CreateSlotDto {
    startTime: Date;
    endTime: Date;
    clientId: number;
  }
  
  export class UpdateSlotDto {
    startTime?: Date;
    endTime?: Date;
  }
  