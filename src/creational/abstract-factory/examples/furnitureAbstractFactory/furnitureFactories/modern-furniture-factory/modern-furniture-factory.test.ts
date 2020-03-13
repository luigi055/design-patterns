import ModernFurnitureFactory from "./modern-furniture-factory";

describe("Testing Modern furniture factory", () => {
  it("should create a modern chair", () => {
    const modernFurniture = new ModernFurnitureFactory();

    const modernChair = modernFurniture.createChair();

    expect(modernChair.chairStyle()).toEqual("Modern Chair");
  });

  it("should create a modern coffee table", () => {
    const modernFurniture = new ModernFurnitureFactory();

    const modernCoffeeTable = modernFurniture.createCoffeeTable();

    expect(modernCoffeeTable.coffeeTableStyle()).toEqual("Modern Coffee Table");
  });

  it("should create a modern sofa", () => {
    const modernFurniture = new ModernFurnitureFactory();

    const modernSofa = modernFurniture.createSofa();

    expect(modernSofa.sofaStyle()).toEqual("Modern Sofa");
  });
});
