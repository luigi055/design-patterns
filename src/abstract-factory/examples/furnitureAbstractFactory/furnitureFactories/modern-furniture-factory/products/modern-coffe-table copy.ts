import ICoffeeTable from "../../abstract-products/coffee-table.interface";

export default class ModernCoffeTable implements ICoffeeTable {
  public coffeeTableStyle(): string {
    return "Modern Coffee Table";
  }
}
