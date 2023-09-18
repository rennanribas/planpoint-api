export class CreateAppointmentDto {
    startDate: Date;
    endDate: Date;
    slotDurationMinutes: number;
  }
  
  export class UpdateAppointmentDto {
    startDate?: Date;
    endDate?: Date;
    slotDurationMinutes?: number;
  }
  