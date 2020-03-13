import Observer, { Temperature } from "./../observer";
import DisplayElement from "../display-element";

class ForeCastDisplay implements Observer, DisplayElement {
  private maxTemperature: Temperature = 0;
  private minTemperature: Temperature = 0;
  private temporalTemperatureSum: Temperature = 0;
  private NumberReadings: number = 0;

  update(temperature: Temperature) {
    this.temporalTemperatureSum += temperature;
    this.NumberReadings += 1;

    if (this.NumberReadings === 1) {
      this.maxTemperature = temperature;
      this.minTemperature = temperature;
    }

    if (temperature > this.maxTemperature) {
      this.maxTemperature = temperature;
    }
    if (temperature < this.minTemperature) {
      this.minTemperature = temperature;
    }

    this.display();
  }

  display() {
    console.log(
      `Avg/Max/Min temperature = ${this.temporalTemperatureSum /
        this.NumberReadings} / ${this.maxTemperature} / ${this.minTemperature}`
    );
  }
}

export default ForeCastDisplay;
