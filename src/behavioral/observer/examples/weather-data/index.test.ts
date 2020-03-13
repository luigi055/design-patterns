import WeatherData from "./index";
import CurrentConditionDisplay from "./display-formats/current-condition-display";
import ForeCastDisplay from "./display-formats/forecast-display";
import StatisticDisplay from "./display-formats/statistic-display";

describe("Testing WeatherData observer", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("should update the information of currentConditionDisplay when weatherData updates its info", () => {
    const weatherData = new WeatherData();
    new CurrentConditionDisplay(weatherData);

    weatherData.updateMeasurements(26.2, 10.3, 5);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${26.2} C degrees and ${10.3} % of humidity`
    );

    weatherData.updateMeasurements(30.2, 14.3, 5);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${30.2} C degrees and ${14.3} % of humidity`
    );
  });

  it("should update the information of forecastDisplay when weatherData updates its info", () => {
    const weatherData = new WeatherData();
    new ForeCastDisplay(weatherData);

    weatherData.updateMeasurements(26.2, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith("More of the same");

    weatherData.updateMeasurements(30.2, 14.3, 5);

    expect(global.console.log).toHaveBeenCalledWith(
      "Improving weather on the way!"
    );

    weatherData.updateMeasurements(30.2, 14.3, 2);

    expect(global.console.log).toHaveBeenCalledWith(
      "Watch out for cooler, rainy weather"
    );
  });

  it("should update the information of statisticDisplay when weatherData updates its info", () => {
    const weatherData = new WeatherData();
    new StatisticDisplay(weatherData);

    weatherData.updateMeasurements(26, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26} / ${26} / ${26}`
    );

    weatherData.updateMeasurements(28, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${27} / ${28} / ${26}`
    );

    weatherData.updateMeasurements(25, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.333333333333332} / ${28} / ${25}`
    );
  });

  it("should update the information of all the observers when weatherData updates its info", () => {
    const weatherData = new WeatherData();
    new CurrentConditionDisplay(weatherData);
    new ForeCastDisplay(weatherData);
    new StatisticDisplay(weatherData);

    weatherData.updateMeasurements(26.2, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${26.2} C degrees and ${10.3} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.2} / ${26.2} / ${26.2}`
    );
    expect(global.console.log).toHaveBeenCalledWith("More of the same");

    weatherData.updateMeasurements(27.6, 10.5, 6);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${26.2} C degrees and ${10.3} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.9} / ${27.6} / ${26.2}`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      "Improving weather on the way!"
    );

    weatherData.updateMeasurements(24.3, 9, 4);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${24.3} C degrees and ${9} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.033333333333333} / ${27.6} / ${24.3}`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      "Watch out for cooler, rainy weather"
    );
  });

  it("should update the information of all the observers except ForeCastDisplay which unsubscribe of the subject", () => {
    const weatherData = new WeatherData();
    new CurrentConditionDisplay(weatherData);
    const forecastDisplay = new ForeCastDisplay(weatherData);
    new StatisticDisplay(weatherData);

    weatherData.updateMeasurements(26.2, 10.3, 0);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${26.2} C degrees and ${10.3} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.2} / ${26.2} / ${26.2}`
    );
    expect(global.console.log).toHaveBeenCalledWith("More of the same");

    weatherData.unsubscribeObserver(forecastDisplay);

    weatherData.updateMeasurements(27.6, 10.5, 6);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${26.2} C degrees and ${10.3} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.9} / ${27.6} / ${26.2}`
    );
    expect(global.console.log).not.toHaveBeenCalledWith(
      "Improving weather on the way!"
    );

    weatherData.updateMeasurements(24.3, 9, 4);

    expect(global.console.log).toHaveBeenCalledWith(
      `the current temperature is ${24.3} C degrees and ${9} % of humidity`
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `Avg/Max/Min temperature = ${26.033333333333333} / ${27.6} / ${24.3}`
    );
    expect(global.console.log).not.toHaveBeenCalledWith(
      "Watch out for cooler, rainy weather"
    );
  });
});
