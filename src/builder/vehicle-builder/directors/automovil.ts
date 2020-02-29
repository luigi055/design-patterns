import VehicleBuilder from "../vehicle-builder";

class Automovil {
  private builder: VehicleBuilder = new VehicleBuilder();

  public setBuilder(builder: VehicleBuilder): Automovil {
    this.builder = builder;

    return this;
  }

  public buildStandardCar() {
    this.builder
      .mountWheels(4)
      .mountDoors(4)
      .isManual(true)
      .DefineTypeOfSeat("fabric");
  }

  public buildDeluxedCar() {
    this.builder
      .mountWheels(4)
      .mountDoors(4)
      .isManual(false)
      .DefineTypeOfSeat("leather");
  }
}

export default Automovil;
