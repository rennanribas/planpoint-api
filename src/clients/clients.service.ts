import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity/client.entity';  // Ensure the path is correct
import { CreateClientDto, UpdateClientDto } from './client.dto';  // Ensure you create these DTOs
import { Address } from './client.entity/address.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client();

    client.name = createClientDto.name;
    client.email = createClientDto.email;
    client.phoneNumber = createClientDto.phoneNumber;

    if (!createClientDto.addresses) {
      throw new BadRequestException('Addresses must be provided.');
    }
    
    const addresses = new Address();
    addresses.streetAddress = createClientDto.addresses.streetAddress;
    addresses.city = createClientDto.addresses.city;
    addresses.state = createClientDto.addresses.state;
    addresses.zipCode = createClientDto.addresses.zipCode;
    
    client.addresses = [addresses];

    return await this.clientRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientRepository.find({ relations: ['addresses'] });
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne(id, { relations: ['addresses'] });
  }

  async update(id: number, dto: UpdateClientDto): Promise<Client> {
    await this.clientRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.clientRepository.delete(id).then(() => {});
  }
}
