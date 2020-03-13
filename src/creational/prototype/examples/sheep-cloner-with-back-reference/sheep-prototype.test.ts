import SheepPrototype from "./sheep-prototype";
import { notEqual } from "assert";

describe("Testing Sheep Prototype", () => {
  test("dolly should be a instance of SheepPrototype", () => {
    const dolly = new SheepPrototype("dolly");

    expect(dolly).toBeInstanceOf(SheepPrototype);
  });

  it("should clone dolly and they're not the same instance", () => {
    const dolly = new SheepPrototype("dolly");
    const clonnedDolly = dolly.clone();

    expect(dolly).not.toEqual(clonnedDolly);
  });

  it("should create a clone base on dolly", () => {
    const dolly = new SheepPrototype("dolly");
    const sonny = dolly.clone();

    expect(sonny.circularReference.prototype).toEqual(dolly);
  });

  it("should create a clone base on sonny", () => {
    const dolly = new SheepPrototype("dolly");
    const sonny = dolly.clone();
    const molly = sonny.clone();

    expect(molly.circularReference.prototype).toEqual(sonny);
  });

  it("should create a clone base on sonny and dont have reference to dolly", () => {
    const dolly = new SheepPrototype("dolly");
    const sonny = dolly.clone();
    const molly = sonny.clone();

    expect(molly.circularReference.prototype).not.toEqual(dolly);
  });

  it("should clone dolly and its clone should have the same name", () => {
    const dolly = new SheepPrototype("dolly");
    const clonnedDolly = dolly.clone();

    expect(dolly.getName()).toBe(clonnedDolly.getName());
  });

  it("should clone dolly and its clone should have the same name", () => {
    const dolly = new SheepPrototype("dolly");
    const molly = dolly.clone().updateName("molly");

    expect(dolly.getName()).not.toBe(molly.getName());
  });
});
