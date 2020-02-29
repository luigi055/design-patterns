import VehicleBuilder from "./vehicle-builder";

describe("Testing Vehicle Builder", () => {
  it("should build a car with 4 wheels", () => {
    const car = new VehicleBuilder();
    car.mountWheels(4);
    expect(car.getVehicle().wheels).toBe(4);
  });

  it("should build a car with 2 doors", () => {
    const car = new VehicleBuilder();
    car.mountDoors(2);
    expect(car.getVehicle().doors).toBe(2);
  });

  it("should build a car with fabric seats", () => {
    const car = new VehicleBuilder();
    car.DefineTypeOfSeat("fabric");
    expect(car.getVehicle().typeOfSeat).toBe("fabric");
  });

  it("should build a car with leather seats", () => {
    const car = new VehicleBuilder();
    car.DefineTypeOfSeat("leather");
    expect(car.getVehicle().typeOfSeat).toBe("leather");
  });

  it("should build a automatic car", () => {
    const car = new VehicleBuilder();
    car.isManual(false);
    expect(car.getVehicle().isManual).toBe(false);
  });

  it("should build a manual motorcycle with fabric seats", () => {
    const buildMotorcycle = new VehicleBuilder();
    buildMotorcycle
      .mountWheels(2)
      .DefineTypeOfSeat("fabric")
      .isManual(true);

    const motorcycle = buildMotorcycle.getVehicle();

    expect(motorcycle).toEqual({
      wheels: 2,
      doors: 0,
      typeOfSeat: "fabric",
      isManual: true
    });
  });
});
