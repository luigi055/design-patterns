import { MODERN_STYLE, VICTORIAN_STYLE } from "./constants";
import IFurnitureFactory from "./furnitureFactories/furnitureFactory.interface";
import VictorianFurnitureFactory from "./furnitureFactories/victorian-furniture-factory";
import ModernFurnitureFactory from "./furnitureFactories/modern-furniture-factory";

const createFurniture = (
  furnitureStyle: typeOfFurnitureStyle
): IFurnitureFactory => {
  switch (furnitureStyle) {
    case MODERN_STYLE:
      return new ModernFurnitureFactory();
    case VICTORIAN_STYLE:
      return new VictorianFurnitureFactory();
    default:
      throw new Error("This furniture style doesnt exist");
  }
};

export default createFurniture;
