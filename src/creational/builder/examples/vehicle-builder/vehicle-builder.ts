import { typeOfSeat } from "./types";
import VehicleInterface from "./vehicle.interface";

import Vehicle from "./vehicle";

class VehicleBuilder implements VehicleInterface {
  private vehicle: Vehicle;

  constructor() {
    this.vehicle = new Vehicle();
    this.reset();
  }

  public reset() {
    this.vehicle = new Vehicle();
  }

  public mountWheels(wheels: number): VehicleBuilder {
    this.vehicle.wheels = wheels;

    return this;
  }

  public mountDoors(doors: number): VehicleBuilder {
    this.vehicle.doors = doors;

    return this;
  }

  public DefineTypeOfSeat(typeOfSeat: typeOfSeat): VehicleBuilder {
    this.vehicle.typeOfSeat = typeOfSeat;

    return this;
  }

  public isManual(isManual: boolean): VehicleBuilder {
    this.vehicle.isManual = isManual;

    return this;
  }

  public getVehicle(): Vehicle {
    const vehicle = this.vehicle;
    this.reset();
    return vehicle;
  }
}

export default VehicleBuilder;
