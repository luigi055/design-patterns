import CaffeineBeverage from "../base-beverage/caffeine-beverage";

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Dripping Coffee through filter");
  }
  addCondiments(): void {
    console.log("Adding Sugar and Milk");
  }
}

export default Coffee;
