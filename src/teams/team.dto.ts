import { WeekDay } from "../enums";

export class CreateAvailabilityDto {
    day: WeekDay;
    startTime: string;
    endTime: string;
}

export class CreateTeamDto {
    name: string;
    description?: string;
    availabilities: CreateAvailabilityDto[];
}

export class UpdateAvailabilityDto {
    id?: string;
    day?: WeekDay;
    startTime?: string;
    endTime?: string;
}

export class UpdateTeamDto {
    name?: string;
    description?: string;
    availabilities?: UpdateAvailabilityDto[];
}