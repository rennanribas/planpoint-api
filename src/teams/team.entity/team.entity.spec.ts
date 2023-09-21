import { Team } from './team.entity';

describe('TeamEntity', () => {
  it('should be defined', () => {
    expect(new Team()).toBeDefined();
  });
});
