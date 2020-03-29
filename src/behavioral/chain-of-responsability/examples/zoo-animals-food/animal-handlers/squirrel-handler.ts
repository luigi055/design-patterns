import AnimalHandler from "./animal-handler";

class SquirrelHandler extends AnimalHandler {
  public handle(request: string): string {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

export default SquirrelHandler;
