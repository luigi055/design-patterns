import { PlaceLocation, LightLevel } from "./models/types.d";

class Light {
  location: PlaceLocation = "";
  level: LightLevel = 0;

  constructor(location: PlaceLocation) {
    this.location = location;
  }

  public on(): void {
    this.level = 100;
    console.log("Light is on");
  }

  public off(): void {
    this.level = 0;
    console.log("Light is off");
  }

  public dim(level: LightLevel): void {
    this.level = level;
    if (level == 0) {
      this.off();
    } else {
      console.log("Light is dimmed to " + this.level + "%");
    }
  }

  public getLevel(): LightLevel {
    return this.level;
  }
}

export default Light;
