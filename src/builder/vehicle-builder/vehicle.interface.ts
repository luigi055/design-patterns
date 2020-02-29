import { typeOfSeat } from "./types";

interface Vehicle {
  mountWheels(wheels: number): void;
  mountDoors(doors: number): void;
  DefineTypeOfSeat(typeOfSeat: typeOfSeat): void;
  isManual(isManual: boolean): void;
}

export default Vehicle;
