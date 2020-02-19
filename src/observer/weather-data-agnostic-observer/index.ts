import Subject from "./subject";
import Observer, { Temperature, Pressure, Humidity } from "./observer";

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: Temperature = 0;
  private pressure: Pressure = 0;
  private humidity: Humidity = 0;

  subscribeObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribeObserver(observer: Observer): void {
    const observerSearchIndex = this.observers.indexOf(observer);

    this.observers.splice(observerSearchIndex, observerSearchIndex);
  }

  sendNotification(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  updateMeasurements(
    temperature: Temperature,
    humidity: Humidity,
    pressure: Pressure
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.sendNotification();
  }
}

export default WeatherData;
