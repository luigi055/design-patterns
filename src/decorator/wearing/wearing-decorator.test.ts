import {
  Person,
  Clothes,
  WearLumberjackShirt,
  WearBootsShoes,
  WearJeansPants,
  WearLeatherGloves
} from "./index";

describe("Testing wearing decorator", () => {
  it("should not wear any clothes", () => {
    const person = new Person();
    expect(person.wear()).toEqual(new Clothes());
  });

  it("should wear LumberJack Shirt", () => {
    const person = new Person();

    const LumberJackManStyle = new WearLumberjackShirt(person);

    const wearinglumberjackShirt = LumberJackManStyle.wear().chest;
    expect(wearinglumberjackShirt).toEqual("Lumberjack Shirt");
    expect(LumberJackManStyle.wear().shoes).toEqual("none");
    expect(LumberJackManStyle.wear().pants).toEqual("none");
    expect(LumberJackManStyle.wear().gloves).toEqual("none");
  });

  it("should wear boots", () => {
    const person = new Person();

    const wearBootDecorator = new WearBootsShoes(person);

    const personOnBoots = wearBootDecorator.wear().shoes;
    expect(personOnBoots).toEqual("Boots");
    expect(wearBootDecorator.wear().chest).toEqual("none");
    expect(wearBootDecorator.wear().pants).toEqual("none");
    expect(wearBootDecorator.wear().gloves).toEqual("none");
  });

  it("should wear Blue Jeans", () => {
    const person = new Person();

    const wearJeansDecorator = new WearJeansPants(person);

    const personOnBlueJeans = wearJeansDecorator.wear().pants;
    expect(personOnBlueJeans).toEqual("Blue Jeans");
    expect(wearJeansDecorator.wear().chest).toEqual("none");
    expect(wearJeansDecorator.wear().shoes).toEqual("none");
    expect(wearJeansDecorator.wear().gloves).toEqual("none");
  });

  it("should wear Leather gloves", () => {
    const person = new Person();

    const wearLeatherGlovesDecorator = new WearLeatherGloves(person);
    const personWearingLeatherGlover = wearLeatherGlovesDecorator.wear().gloves;

    expect(personWearingLeatherGlover).toEqual("Leather gloves");
    expect(wearLeatherGlovesDecorator.wear().chest).toEqual("none");
    expect(wearLeatherGlovesDecorator.wear().shoes).toEqual("none");
    expect(wearLeatherGlovesDecorator.wear().pants).toEqual("none");
  });

  it("should wear Lumberjack style clothes", () => {
    let LumberJackManStyle = new Person();
    LumberJackManStyle = new WearLumberjackShirt(LumberJackManStyle);
    LumberJackManStyle = new WearJeansPants(LumberJackManStyle);
    LumberJackManStyle = new WearBootsShoes(LumberJackManStyle);
    LumberJackManStyle = new WearLeatherGloves(LumberJackManStyle);

    expect(LumberJackManStyle.wear().chest).toEqual("Lumberjack Shirt");
    expect(LumberJackManStyle.wear().gloves).toEqual("Leather gloves");
    expect(LumberJackManStyle.wear().shoes).toEqual("Boots");
    expect(LumberJackManStyle.wear().pants).toEqual("Blue Jeans");
  });

  it("should wear Lumberjack style clothes without gloves", () => {
    let LumberJackManStyle = new Person();
    LumberJackManStyle = new WearLumberjackShirt(LumberJackManStyle);
    LumberJackManStyle = new WearJeansPants(LumberJackManStyle);
    LumberJackManStyle = new WearBootsShoes(LumberJackManStyle);

    expect(LumberJackManStyle.wear().chest).toEqual("Lumberjack Shirt");
    expect(LumberJackManStyle.wear().gloves).toEqual("none");
    expect(LumberJackManStyle.wear().shoes).toEqual("Boots");
    expect(LumberJackManStyle.wear().pants).toEqual("Blue Jeans");
  });
});
