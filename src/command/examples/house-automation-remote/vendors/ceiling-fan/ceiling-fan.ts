import { SpeedLevel, PlaceLocation } from "./models/types.d";
import { OFF, HIGH, MEDIUM, LOW } from "./models";

class CeilingFan {
  private speed: SpeedLevel;

  constructor(private location: PlaceLocation) {
    this.speed = OFF;
  }

  public high(): void {
    this.speed = HIGH;
    console.log(this.location + " ceiling fan is on high");
  }

  public medium(): void {
    this.speed = MEDIUM;
    console.log(this.location + " ceiling fan is on medium");
  }

  public low(): void {
    this.speed = LOW;
    console.log(this.location + " ceiling fan is on low");
  }

  public off(): void {
    this.speed = OFF;
    console.log(this.location + " ceiling fan is off");
  }

  public getSpeed(): SpeedLevel {
    return this.speed;
  }
}

export default CeilingFan;
