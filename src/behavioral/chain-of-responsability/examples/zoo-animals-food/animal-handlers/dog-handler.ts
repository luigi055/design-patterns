import AnimalHandler from "./animal-handler";

class DogHandler extends AnimalHandler {
  public handle(request: string): string {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

export default DogHandler;
