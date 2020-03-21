import Gym from "./strategies/gym-strategy";
import Person from "./person";
import Soccer from "./strategies/soccer-strategy";
import MultiSports from "./strategies/multi-sport-strategy";
import Tennis from "./strategies/tennis-strategy";

describe("Testing workout strategy", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  test("Pedro should start doing exercise in the gym", () => {
    const pedro = new Person("Pedro", new Gym());

    pedro.workout();

    expect(global.console.log).toHaveBeenCalledWith("Pedro decided to:");
    expect(global.console.log).toHaveBeenCalledWith("do exercises in the Gym.");
  });

  test("David should start to play soccer", () => {
    const david = new Person("David", new Soccer());

    david.workout();

    expect(global.console.log).toHaveBeenCalledWith("David decided to:");
    expect(global.console.log).toHaveBeenCalledWith("play Soccer.");
  });

  test("John should play some tennis and then go to the gym", () => {
    const john = new Person("John", new MultiSports([new Tennis(), new Gym()]));

    john.workout();

    expect(global.console.log).toHaveBeenCalledWith("John decided to:");
    expect(global.console.log).toHaveBeenCalledWith("play Tennis.");
    expect(global.console.log).toHaveBeenCalledWith("do exercises in the Gym.");
  });
});
