interface roomNumber {
  number: number;
  unavailableDates: { type: Date[] };
}

export interface Room {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: roomNumber[];
}
