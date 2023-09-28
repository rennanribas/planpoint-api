
export enum WeekDay {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
  }

export type IntervalPsql = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}