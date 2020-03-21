import ShopperStrategy from "../discount-strategy";

class GuestShopperStrategy implements ShopperStrategy {
  getTotalToPay(amount: number): number {
    return amount;
  }
}

export default GuestShopperStrategy;
