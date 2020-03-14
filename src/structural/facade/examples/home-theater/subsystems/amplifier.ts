import CdPlayer from "./cd-player";
import Tuner from "./tuner";
import DvdPlayer from "./dvd-player";

class Amplifier {
  private tuner: Tuner | undefined;
  private dvdPlayer: DvdPlayer | undefined;
  private cdPlayer: CdPlayer | undefined;

  public constructor(private description: string) {}

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public setStereoSound(): void {
    console.log(this.description + " stereo mode on");
  }

  public setSurroundSound(): void {
    console.log(
      this.description + " surround sound on (5 speakers, 1 subwoofer)"
    );
  }

  public setVolume(level: number): void {
    console.log(this.description + " setting volume to " + level);
  }

  public setTuner(tuner: Tuner): void {
    console.log(this.description + " setting tuner to " + this.dvdPlayer);
    this.tuner = tuner;
  }

  public setDvd(dvd: DvdPlayer): void {
    console.log(this.description + " setting DVD player to " + dvd);
    this.dvdPlayer = dvd;
  }

  public setCd(cd: CdPlayer): void {
    console.log(this.description + " setting CD player to " + cd);
    this.cdPlayer = cd;
  }

  public toString(): string {
    return this.description;
  }
}

export default Amplifier;
