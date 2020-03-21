import ShopperStrategy from "../discount-strategy";

class HalfPriceDiscount implements ShopperStrategy {
  getTotalToPay(amount: number): number {
    return amount * 0.5;
  }
}

export default HalfPriceDiscount;
