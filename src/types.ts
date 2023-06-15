export interface Map {
  id: string;
}

export interface SeatMap {
  [key: string]: number[][];
}

export interface Ticket {
  x: number;
  y: number;
}
