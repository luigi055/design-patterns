import { switchTurn, Temperature } from "./models/types.d";

class Hottub {
  private isOn: switchTurn = false;
  private temperature: Temperature = 0;

  public on(): void {
    this.isOn = true;
  }

  public off(): void {
    this.isOn = false;
    console.log("Hottub is off");
  }

  public circulate(): void {
    if (this.isOn) {
      console.log("Hottub is bubbling!");
    }
  }

  public jetsOn(): void {
    if (this.isOn) {
      console.log("Hottub jets are on");
    }
  }

  public jetsOff(): void {
    if (this.isOn) {
      console.log("Hottub jets are off");
    }
  }

  public setTemperature(temperature: Temperature): void {
    if (temperature > this.temperature) {
      console.log(
        "Hottub is heating to a steaming " + temperature + " degrees"
      );
    } else {
      console.log("Hottub is cooling to " + temperature + " degrees");
    }
    this.temperature = temperature;
  }
}

export default Hottub;
