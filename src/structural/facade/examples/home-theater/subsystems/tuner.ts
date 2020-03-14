import Amplifier from "./amplifier";

class Tuner {
  private frequency: number = 0;

  constructor(private description: string, private amplifier: Amplifier) {}

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public setFrequency(frequency: number): void {
    console.log(this.description + " setting frequency to " + frequency);
    this.frequency = frequency;
  }

  public setAm(): void {
    console.log(this.description + " setting AM mode");
  }

  public setFm(): void {
    console.log(this.description + " setting FM mode");
  }

  public toString(): String {
    return this.description;
  }
}

export default Tuner;
