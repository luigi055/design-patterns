import SportStrategy from "./sport-strategy";

class Person {
  constructor(public name: string, private favoriteWorkout: SportStrategy) {}

  workout(): void {
    console.log(`${this.name} decided to:`);
    this.favoriteWorkout.begin();
  }
}

export default Person;
