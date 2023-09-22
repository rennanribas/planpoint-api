export class CreateAppointmentDto {
  startDate: Date;
  endDate: Date;
  comments: string;
  addressId: string;
}

export class UpdateAppointmentDto {
  startDate?: Date;
  endDate?: Date;
  comments?: string;
  addressId?: string; 
}