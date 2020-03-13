import VictorianFurnitureFactory from "./victorian-furniture-factory";

describe("Testing Victorian furniture factory", () => {
  it("should create a victorian chair", () => {
    const victorianFurniture = new VictorianFurnitureFactory();

    const victorianChair = victorianFurniture.createChair();

    expect(victorianChair.chairStyle()).toBe("Victorian Chair");
  });

  it("should create a victorian coffee table", () => {
    const victorianFurniture = new VictorianFurnitureFactory();

    const victorianCoffeeTable = victorianFurniture.createCoffeeTable();

    expect(victorianCoffeeTable.coffeeTableStyle()).toBe(
      "Victorian Coffee Table"
    );
  });

  it("should create a victorian sofa", () => {
    const victorianFurniture = new VictorianFurnitureFactory();

    const victorianSofa = victorianFurniture.createSofa();

    expect(victorianSofa.sofaStyle()).toBe("Victorian Sofa");
  });
});
