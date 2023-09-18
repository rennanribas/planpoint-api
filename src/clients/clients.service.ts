import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity/client.entity';
import { CreateClientDto, UpdateClientDto } from './client.dto'; 
import { Address } from './client.entity/address.entity';
@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client();

    client.name = createClientDto.name;
    client.email = createClientDto.email;
    client.phoneNumber = createClientDto.phoneNumber;

    if (!createClientDto.addresses || createClientDto.addresses.length === 0) {
      throw new BadRequestException('At least one address must be provided.');
    }

    client.addresses = createClientDto.addresses.map(addressDto => {
        const address = new Address();
        address.streetAddress = addressDto.streetAddress;
        address.city = addressDto.city;
        address.state = addressDto.state;
        address.zipCode = addressDto.zipCode;
        return address;
    });

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
