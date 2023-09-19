import { WeekDay } from "src/enums";

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
    id?: string;  // Optional, in case you want to update by ID
    day?: WeekDay;
    startTime?: string;
    endTime?: string;
}

export class UpdateTeamDto {
    name?: string;
    description?: string;
    availabilities?: UpdateAvailabilityDto[];
}