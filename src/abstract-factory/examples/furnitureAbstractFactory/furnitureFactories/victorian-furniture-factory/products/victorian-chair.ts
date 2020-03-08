import IChair from "../../abstract-products/chair.interface";

export default class VictorianChair implements IChair {
  public chairStyle(): string {
    return "Victorian Chair";
  }
}
