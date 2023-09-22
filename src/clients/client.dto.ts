class AddressDto {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export class CreateClientDto {
  name: string;
  email: string;
  phoneNumber: string;
  addresses: AddressDto[];
}

export class UpdateClientDto {
  name?: string;
  email?: string;
  phoneNumber?: string;
  addresses?: AddressDto[];
}