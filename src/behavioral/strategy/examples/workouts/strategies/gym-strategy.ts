import SportStrategy from "./strategy";

export default class Gym implements SportStrategy {
  public begin(): void {
    console.log("do exercises in the Gym.");
  }
}
