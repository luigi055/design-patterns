import ShopperStrategy from "../discount-strategy";

class RegularShopperDiscountStrategy implements ShopperStrategy {
  getTotalToPay(amount: number): number {
    return amount * 0.9;
  }
}

export default RegularShopperDiscountStrategy;
