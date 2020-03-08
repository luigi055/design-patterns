import FurnitureFactory from "../furnitureFactory.interface";
import VictorianChair from "./products/victorian-chair";
import VictorianCoffeTable from "./products/victorian-coffee-table";
import VcitorianSofa from "./products/victorian-sofa";
import IChair from "../abstract-products/chair.interface";
import ICoffeeTable from "../abstract-products/coffee-table.interface";
import ISofa from "../abstract-products/sofa.interface";

class VictorianFurnitureFactory implements FurnitureFactory {
  public createChair(): IChair {
    const chair = new VictorianChair();

    return chair;
  }

  public createCoffeeTable(): ICoffeeTable {
    const coffeeTable = new VictorianCoffeTable();

    return coffeeTable;
  }

  public createSofa(): ISofa {
    const sofa = new VcitorianSofa();

    return sofa;
  }
}

export default VictorianFurnitureFactory;
