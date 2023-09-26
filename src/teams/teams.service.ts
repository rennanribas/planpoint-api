import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity/team.entity';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private readonly teamRepository: Repository<Team>,
    ) {}

    findAll(): Promise<Team[]> {
        return this.teamRepository.find({
            select: ["id", "name", "description"]
        });
    }

    findOne(id: number): Promise<Team> {
        return this.teamRepository.findOne({ where: { id } });
    }

    async create(team: Team): Promise<Team> {
        return await this.teamRepository.save(team);
    }

    async update(uuid: string, team: Team): Promise<Team> {
        await this.teamRepository.update(uuid, team);
        return this.teamRepository.findOne({ where: { uuid } });
    }

    async delete(id: string): Promise<void> {
        await this.teamRepository.delete(id);
    }
}
