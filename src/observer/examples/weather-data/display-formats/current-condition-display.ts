import Observer, { Temperature, Humidity, Pressure } from "./../observer";
import DisplayElement from "../display-element";
import Subject from "../subject";

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: Temperature = 0;
  private weatherData: Subject;
  private humidity: Humidity = 0;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;

    this.weatherData.subscribeObserver(this);
  }

  update(temperature: Temperature, humidity: Humidity, pressure: Pressure) {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }

  display() {
    console.log(
      `the current temperature is ${this.temperature} C degrees and ${this.humidity} % of humidity`
    );
  }
}

export default CurrentConditionDisplay;
