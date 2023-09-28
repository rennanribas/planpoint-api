import { IntervalPsql } from "../enums";
import { Address } from "./client.entity/address.entity";

export class CreateAddressDto {
  id?: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  initialSessionDuration: string | IntervalPsql;
  regularSessionDuration: string | IntervalPsql;
}

export class CreateClientDto {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  addresses: CreateAddressDto[];
}

export class UpdateClientDto {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  addresses?: Address[];
}