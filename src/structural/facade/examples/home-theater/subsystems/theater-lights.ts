class TheaterLights {
  constructor(private description: string) {}

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public dim(level: number): void {
    console.log(this.description + " dimming to " + level + "%");
  }

  public toString(): string {
    return this.description;
  }
}

export default TheaterLights;
