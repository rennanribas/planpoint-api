import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeamService } from './teams.service';
import { Team } from './team.entity/team.entity';

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) {}

    @Get()
    async findAll(): Promise<Team[]> {
        return this.teamService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Team> {
        return this.teamService.findOne(id);
    }

    @Post()
    async create(@Body() team: Team): Promise<Team> {
        return this.teamService.create(team);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() team: Team): Promise<Team> {
        return this.teamService.update(id, team);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.teamService.delete(id);
    }
}
