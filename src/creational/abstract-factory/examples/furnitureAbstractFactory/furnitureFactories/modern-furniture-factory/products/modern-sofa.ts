import ISofa from "../../abstract-products/sofa.interface";

export default class ModernSofa implements ISofa {
  public sofaStyle(): string {
    return "Modern Sofa";
  }
}
