import { typeOfSeat } from "../types";
import Automovil from "./automovil";
import VehicleBuilder from "../vehicle-builder";

describe("Testing Automovil Director", () => {
  it("should create a standard car", () => {
    const vehicleBuilder = new VehicleBuilder();
    const automovilDirector = new Automovil().setBuilder(vehicleBuilder);

    automovilDirector.buildStandardCar();
    const standardCar = vehicleBuilder.getVehicle();

    expect(standardCar).toEqual({
      doors: 4,
      wheels: 4,
      typeOfSeat: "fabric",
      isManual: true
    });
  });

  it("should create a deluxed car", () => {
    const vehicleBuilder = new VehicleBuilder();
    const automovilDirector = new Automovil().setBuilder(vehicleBuilder);

    automovilDirector.buildDeluxedCar();
    const deluxedCar = vehicleBuilder.getVehicle();

    expect(deluxedCar).toEqual({
      doors: 4,
      wheels: 4,
      typeOfSeat: "leather",
      isManual: false
    });
  });
});
