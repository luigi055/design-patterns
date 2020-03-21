import Caffee from "./beverages/caffe-beverage";
import Tea from "./beverages/tea-beverage";

describe("Testing Barista application", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("should prepared a caffee defined by the coffe algorithm", () => {
    const coffee = new Caffee();

    coffee.prepareRecipe();

    expect(global.console.log).toHaveBeenCalledWith("Boiling water");
    expect(global.console.log).toHaveBeenCalledWith(
      "Dripping Coffee through filter"
    );
    expect(global.console.log).toHaveBeenCalledWith("Pouring into cup");
    expect(global.console.log).toHaveBeenCalledWith("Adding Sugar and Milk");
  });

  it("should prepared a Tea defined by the coffe algorithm", () => {
    const tea = new Tea();

    tea.prepareRecipe();

    expect(global.console.log).toHaveBeenCalledWith("Boiling water");
    expect(global.console.log).toHaveBeenCalledWith("Steeping the tea");
    expect(global.console.log).toHaveBeenCalledWith("Pouring into cup");
    expect(global.console.log).toHaveBeenCalledWith("Adding Lemon");
  });
});
