export class CreateAppointmentDto {
  startDate: Date;
  endDate: Date;
  comments: string;
  addressId: string;
  teamId: number;
}

export class UpdateAppointmentDto {
  startDate?: Date;
  endDate?: Date;
  comments?: string;
  addressId?: string; 
}