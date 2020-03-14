class Screen {
  constructor(private description: string) {}

  public up(): void {
    console.log(this.description + " going up");
  }

  public down(): void {
    console.log(this.description + " going down");
  }

  public toString(): string {
    return this.description;
  }
}

export default Screen;
