import FurnitureFactory from "../furnitureFactory.interface";
import ModernChair from "./products/modern-chair";
import ModernCoffeTable from "./products/modern-coffe-table copy";
import ModernSofa from "./products/modern-sofa";
import IChair from "../abstract-products/chair.interface";
import ICoffeeTable from "../abstract-products/coffee-table.interface";
import ISofa from "../abstract-products/sofa.interface";

class ModernFurnitureFactory implements FurnitureFactory {
  public createChair(): IChair {
    const chair = new ModernChair();

    return chair;
  }

  public createCoffeeTable(): ICoffeeTable {
    const coffeTable = new ModernCoffeTable();

    return coffeTable;
  }

  public createSofa(): ISofa {
    const sofa = new ModernSofa();
    return sofa;
  }
}

export default ModernFurnitureFactory;
