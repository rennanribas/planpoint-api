import { Module } from '@nestjs/common';
import { TeamService } from './teams.service';
import { TeamController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  controllers: [TeamController],
  exports: [TeamService] 
})
export class TeamModule {}
