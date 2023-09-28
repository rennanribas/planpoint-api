import { Client } from '../clients/client.entity/client.entity';
import { Connection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Address } from '../clients/client.entity/address.entity';

export default class ClientSeeder {
    public static async run(connection: Connection): Promise<void> {
    const clients = [];
    const totalClients = 100;

    for (let i = 1; i <= totalClients; i++) {
      const client = new Client();
      client.id = uuidv4();
      client.name = `John Doe ${i}`;
      client.email = `johndoe${i}@example.com`;
      client.phoneNumber = `123-456-78${i % 100}`;

      const address1 = new Address();
      address1.id = uuidv4();
      address1.streetAddress = `${i} Elm Street`;
      address1.city = 'Springfield';
      address1.state = 'IL';
      address1.zipCode = '62704';
      address1.initialSessionDuration = '2 hours';
      address1.regularSessionDuration = '1 hours 30 minutes'; 

      const address2 = new Address();
      address2.id = uuidv4();
      address2.streetAddress = `${i} Maple Avenue`;
      address2.city = 'Shelbyville';
      address2.state = 'IL';
      address2.zipCode = '62521';
      address2.initialSessionDuration = '1 hours 30 minutes';
      address2.regularSessionDuration = '45 minutes'; 

      client.addresses = [address1, address2];
      clients.push(client);
    }

    for (const client of clients) {
      await connection.manager.save(client);
    }
  }
}
