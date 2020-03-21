interface DiscountStrategy {
  getTotalToPay(amount: number): number;
}

export default DiscountStrategy;
