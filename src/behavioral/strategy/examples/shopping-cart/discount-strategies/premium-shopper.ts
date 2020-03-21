import ShopperStrategy from "../discount-strategy";

class PremiumShopperDiscountStrategy implements ShopperStrategy {
  getTotalToPay(amount: number): number {
    return amount * 0.8;
  }
}

export default PremiumShopperDiscountStrategy;
