import ISofa from "../../abstract-products/sofa.interface";

export default class VcitorianSofa implements ISofa {
  public sofaStyle(): string {
    return "Victorian Sofa";
  }
}
