import ZooAnimalsFood from "./zoo-animals-food";
import AnimalHandler from "./animal-handlers/animal-base-handler";
import SquirrelHandler from "./animal-handlers/squirrel-handler";
import DogHandler from "./animal-handlers/dog-handler";
import MonkeyHandler from "./animal-handlers/monkey-handler";

describe("Testing ZooAnimalFood application", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("should left untouch the nut, banana and cup of coffee", () => {
    const baseHandler = new AnimalHandler();

    ZooAnimalsFood.main(baseHandler);

    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Nut?`);
    expect(console.log).toHaveBeenCalledWith(`  Nut was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Banana?`);
    expect(console.log).toHaveBeenCalledWith(`  Banana was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a MeatBall?`);
    expect(console.log).toHaveBeenCalledWith(`  MeatBall was left untouched.`);
  });

  test("the squirrel should eat the nut when set the squirrel handler", () => {
    const squirrelHandler = new SquirrelHandler();

    ZooAnimalsFood.main(squirrelHandler);

    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Nut?`);
    expect(console.log).toHaveBeenCalledWith("  Squirrel: I'll eat the Nut.");
    expect(console.log).not.toHaveBeenCalledWith(`  Nut was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Banana?`);
    expect(console.log).toHaveBeenCalledWith(`  Banana was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a MeatBall?`);
    expect(console.log).toHaveBeenCalledWith(`  MeatBall was left untouched.`);
  });

  test("the Dog should eat the Steak when set the Dog handler", () => {
    const dogHandler = new DogHandler();

    ZooAnimalsFood.main(dogHandler);

    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Nut?`);
    expect(console.log).toHaveBeenCalledWith(`  Nut was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Banana?`);
    expect(console.log).toHaveBeenCalledWith(`  Banana was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a MeatBall?`);
    expect(console.log).toHaveBeenCalledWith("  Dog: I'll eat the MeatBall.");

    expect(console.log).not.toHaveBeenCalledWith(
      `  MeatBall was left untouched.`
    );
  });

  test("the Monkey should eat the Banana when set the Monkey handler", () => {
    const monkeyHandler = new MonkeyHandler();

    ZooAnimalsFood.main(monkeyHandler);

    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Nut?`);
    expect(console.log).toHaveBeenCalledWith(`  Nut was left untouched.`);
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Banana?`);
    expect(console.log).toHaveBeenCalledWith("  Monkey: I'll eat the Banana.");
    expect(console.log).not.toHaveBeenCalledWith(
      `  Banana was left untouched.`
    );
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a MeatBall?`);

    expect(console.log).toHaveBeenCalledWith(`  MeatBall was left untouched.`);
  });

  it("should give to each animal the food they demand", () => {
    const baseHandler = new AnimalHandler();
    const monkeyHandler = new MonkeyHandler();
    const squirrelHandler = new SquirrelHandler();
    const dogHandler = new DogHandler();

    baseHandler
      .setNext(monkeyHandler)
      .setNext(squirrelHandler)
      .setNext(dogHandler);

    ZooAnimalsFood.main(baseHandler);

    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Nut?`);
    expect(console.log).toHaveBeenCalledWith("  Squirrel: I'll eat the Nut.");
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a Banana?`);
    expect(console.log).toHaveBeenCalledWith("  Monkey: I'll eat the Banana.");
    expect(console.log).toHaveBeenCalledWith(`Client: Who wants a MeatBall?`);
    expect(console.log).toHaveBeenCalledWith("  Dog: I'll eat the MeatBall.");
  });
});
