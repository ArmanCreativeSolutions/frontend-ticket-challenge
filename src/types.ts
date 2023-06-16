export interface Map {
  id: string;
  name: string;
}

export interface SeatMap {
  [key: string]: number[][];
}

export interface Seat {
  x: number;
  y: number;
}

export interface Ticket {
  x: number;
  y: number;
}
