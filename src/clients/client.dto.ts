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
  addresses: AddressDto[]; // Note que agora é um array de AddressDto
}

export class UpdateClientDto {
  name?: string;
  email?: string;
  phoneNumber?: string; // Coloquei o phoneNumber como opcional também, porque você está atualizando, então talvez não queira alterá-lo todas as vezes
  addresses?: AddressDto[]; // O mesmo conceito, um array para representar múltiplos endereços
}