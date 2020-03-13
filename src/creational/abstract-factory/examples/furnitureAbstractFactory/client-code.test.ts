import createFurniture from "./client-code";

describe("Testing createFurniture function", () => {
  it("should create a modern style chair", () => {
    const modernChair = createFurniture("modern").createChair();

    expect(modernChair.chairStyle()).toBe("Modern Chair");
  });

  it("should create a modern style coffee table", () => {
    const modernCoffeeTable = createFurniture("modern").createCoffeeTable();

    expect(modernCoffeeTable.coffeeTableStyle()).toBe("Modern Coffee Table");
  });

  it("should create a modern style Sofa", () => {
    const modernCoffeeTable = createFurniture("modern").createSofa();

    expect(modernCoffeeTable.sofaStyle()).toBe("Modern Sofa");
  });

  it("should create a Victorian style chair", () => {
    const victorianChair = createFurniture("victorian").createChair();

    expect(victorianChair.chairStyle()).toBe("Victorian Chair");
  });

  it("should create a Victorian style coffee Table", () => {
    const victorianCoffeeTable = createFurniture(
      "victorian"
    ).createCoffeeTable();

    expect(victorianCoffeeTable.coffeeTableStyle()).toBe(
      "Victorian Coffee Table"
    );
  });

  it("should create a Victorian style sofa", () => {
    const victorianSofa = createFurniture("victorian").createSofa();

    expect(victorianSofa.sofaStyle()).toBe("Victorian Sofa");
  });

  it("should throw error if furniture style doesnt exist", () => {
    expect(() => createFurniture("another furniture")).toThrowError(
      "This furniture style doesnt exist"
    );
  });
});
