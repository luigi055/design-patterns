import SportStrategy from "./strategy";

export default class Soccer implements SportStrategy {
  public begin(): void {
    console.log("play Soccer.");
  }
}
