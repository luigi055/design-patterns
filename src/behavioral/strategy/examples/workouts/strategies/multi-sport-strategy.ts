import SportStrategy from "../sport-strategy";

class MultiSports implements SportStrategy {
  private sports: SportStrategy[];

  constructor(sports: SportStrategy[]) {
    this.sports = sports;
  }

  begin(): void {
    this.sports.forEach(sport => sport.begin());
  }
}

export default MultiSports;
