import { Appointment } from './appointment.entity';

describe('AppointmentEntity', () => {
  it('should be defined', () => {
    expect(new Appointment()).toBeDefined();
  });
});
