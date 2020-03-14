import Amplifier from "./amplifier";

class DvdPlayer {
  private currentTrack: number = 0;
  private movie: string = "";

  public constructor(
    private description: string,
    private amplifier: Amplifier
  ) {}

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public eject(): void {
    this.movie = "";
    console.log(this.description + " eject");
  }

  public play(movie: string): void {
    this.movie = movie;
    this.currentTrack = 0;

    console.log(this.description + ' playing "' + movie + '"');
  }

  public playTrack(track: number): void {
    if (this.movie === "") {
      console.log(
        this.description + " can't play track " + track + " no dvd inserted"
      );
    } else {
      this.currentTrack = track;
      console.log(
        this.description +
          " playing track " +
          this.currentTrack +
          ' of "' +
          this.movie +
          '"'
      );
    }
  }

  public stop(): void {
    this.currentTrack = 0;
    console.log(this.description + ' stopped "' + this.movie + '"');
  }

  public pause(): void {
    console.log(this.description + ' paused "' + this.movie + '"');
  }

  public setTwoChannelAudio(): void {
    console.log(this.description + " set two channel audio");
  }

  public setSurroundAudio(): void {
    console.log(this.description + " set surround audio");
  }

  public toString(): string {
    return this.description;
  }
}

export default DvdPlayer;
