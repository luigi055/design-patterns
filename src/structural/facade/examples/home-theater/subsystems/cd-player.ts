import Amplifier from "./amplifier";

class CdPlayer {
  private currentTrack: number;
  private title: string;

  public constructor(
    private description: string,
    private amplifier: Amplifier
  ) {
    this.currentTrack = 0;
    this.title = "";
  }

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public eject(): void {
    this.title = "";
    console.log(this.description + " eject");
  }

  public play(title: string): void {
    this.title = title;
    this.currentTrack = 0;
    console.log(this.description + ' playing "' + title + '"');
  }

  public playTrack(track: number): void {
    if (this.title === "") {
      console.log(
        this.description +
          " can't play track " +
          this.currentTrack +
          ", no cd inserted"
      );
    } else {
      this.currentTrack = track;
      console.log(this.description + " playing track " + this.currentTrack);
    }
  }

  public stop(): void {
    this.currentTrack = 0;
    console.log(this.description + " stopped");
  }

  public pause(): void {
    console.log(this.description + ' paused "' + this.title + '"');
  }

  public toString(): string {
    return this.description;
  }
}

export default CdPlayer;
