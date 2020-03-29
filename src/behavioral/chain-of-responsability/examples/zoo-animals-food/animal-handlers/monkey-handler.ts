import AnimalHandler from "./animal-handler";

class MonkeyHandler extends AnimalHandler {
  public handle(request: string): string {
    if (request === "Banana") {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

export default MonkeyHandler;
