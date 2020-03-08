import Observer, { Temperature, Humidity, Pressure } from "./../observer";
import DisplayElement from "../display-element";
import Subject from "../subject";

class ForeCastDisplay implements Observer, DisplayElement {
  private pressure: Pressure = 0;
  private weatherData: Subject;
  private lastPressure: Pressure = 0;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;

    this.weatherData.subscribeObserver(this);
  }

  update(temperature: Temperature, humidity: Humidity, pressure: Pressure) {
    this.lastPressure = this.pressure;
    this.pressure = pressure;

    this.display();
  }

  display() {
    if (this.pressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.pressure == this.lastPressure) {
      console.log("More of the same");
    } else if (this.pressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
}

export default ForeCastDisplay;
