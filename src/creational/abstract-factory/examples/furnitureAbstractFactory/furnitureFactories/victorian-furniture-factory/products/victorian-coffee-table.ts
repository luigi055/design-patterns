import ICoffeeTable from "../../abstract-products/coffee-table.interface";

export default class VictorianCoffeTable implements ICoffeeTable {
  public coffeeTableStyle(): string {
    return "Victorian Coffee Table";
  }
}
