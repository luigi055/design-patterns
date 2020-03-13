import { Temperature, Humidity, Pressure } from "../model/weather.types";

interface Observer {
  update(
    temperature: Temperature,
    humidity: Humidity,
    pressure: Pressure
  ): void;
}

export default Observer;
