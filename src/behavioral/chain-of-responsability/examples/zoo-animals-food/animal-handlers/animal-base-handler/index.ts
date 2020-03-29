import AnimalHandler from "../animal-handler";

class AnimalBaseHandler extends AnimalHandler {
  public handle(request: string): string {
    return super.handle(request);
  }
}

export default AnimalBaseHandler;
