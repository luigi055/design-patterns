import DiscountStrategy from "./discount-strategy";

class ShoppingCart {
  private amount: number = 0;
  constructor(private discount: DiscountStrategy) {}

  checkout() {
    return this.discount.getTotalToPay(this.amount);
  }

  setAmount(amount: number) {
    this.amount = amount;
  }
}

export default ShoppingCart;
