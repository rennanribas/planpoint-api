// client.dto.ts

export class CreateClientDto {
  name: string;
  email: string;
  phoneNumber: string;
  addresses: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
  
  export class UpdateClientDto {
    name?: string;
    email?: string;
    phoneNumber: string;
    // Similarly, add other fields here for updating purposes.
  }
  