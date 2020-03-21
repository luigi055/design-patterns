abstract class CaffeineBeverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  protected abstract brew(): void;

  protected abstract addCondiments(): void;

  boilWater(): void {
    console.log("Boiling water");
  }

  pourInCup(): void {
    console.log("Pouring into cup");
  }
}

export default CaffeineBeverage;
