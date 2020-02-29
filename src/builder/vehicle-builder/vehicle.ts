import { typeOfSeat } from "./types";

class Vehicle {
  public wheels: number = 0;
  public doors: number = 0;
  public typeOfSeat: typeOfSeat = "fabric";
  public isManual: boolean = true;
}

export default Vehicle;
