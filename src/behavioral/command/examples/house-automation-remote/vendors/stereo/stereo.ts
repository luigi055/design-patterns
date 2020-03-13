import { PlaceLocation, Volume } from "./models/types.d";

class Stereo {
  private volume: Volume = 0;

  constructor(public location: PlaceLocation) {}

  public on(): void {
    console.log(this.location + " stereo is on");
  }

  public off(): void {
    console.log(this.location + " stereo is off");
  }

  public setCD(): void {
    console.log(this.location + " stereo is set for CD input");
  }

  public setDVD(): void {
    console.log(this.location + " stereo is set for DVD input");
  }

  public setRadio(): void {
    console.log(this.location + " stereo is set for Radio");
  }

  public setVolume(volume: Volume): void {
    this.volume = volume;
    // code to set the volume
    // valid range: 1-11 (after all 11 is better than 10, right?)
    console.log(this.location + " Stereo volume set to " + this.volume);
  }
}

export default Stereo;
