export type ClockType = 'analog' | 'digital';
export type TimeFormat = '24h' | 'ampm';

export interface CurrentTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CurrentDate {
  day: number;
  month: number;
  year: number;
  weekDay: number;
}
