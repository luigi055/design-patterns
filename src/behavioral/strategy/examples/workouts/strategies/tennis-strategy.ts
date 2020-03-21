import SportStrategy from "./strategy";

export default class Tennis implements SportStrategy {
  public begin(): void {
    console.log("play Tennis.");
  }
}
