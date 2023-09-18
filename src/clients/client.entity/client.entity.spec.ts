import { Client } from './client.entity';

describe('ClientEntity', () => {
  it('should be defined', () => {
    expect(new Client()).toBeDefined();
  });
});
