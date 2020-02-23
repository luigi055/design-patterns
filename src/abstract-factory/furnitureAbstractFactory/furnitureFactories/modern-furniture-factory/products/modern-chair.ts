import IChair from "../../abstract-products/chair.interface";

export default class ModernChair implements IChair {
  public chairStyle(): string {
    return "Modern Chair";
  }
}
