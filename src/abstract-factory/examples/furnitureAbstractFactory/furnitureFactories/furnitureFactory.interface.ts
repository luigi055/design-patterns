import IChair from "./abstract-products/chair.interface";
import ICoffeeTable from "./abstract-products/coffee-table.interface";
import ISofa from "./abstract-products/sofa.interface";

export default interface FurnitureFactory {
  createChair(): IChair;
  createCoffeeTable(): ICoffeeTable;
  createSofa(): ISofa;
}
