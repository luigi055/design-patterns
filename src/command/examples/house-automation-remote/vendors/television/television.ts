import { PlaceLocation, Channel } from "./models/types.d";

class TV {
  private channel: Channel;

  constructor(private location: PlaceLocation) {
    this.location = location;
    this.channel = 0;
  }

  public on(): void {
    console.log(this.location + " TV is on");
  }

  public off(): void {
    console.log(this.location + " TV is off");
  }

  public setInputChannel(channel: Channel = 3): void {
    this.channel = channel;
    console.log(this.location + " TV channel is set for DVD");
  }

  public getChannel() {
    return this.channel;
  }
}

export default TV;
