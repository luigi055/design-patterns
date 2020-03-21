import ShoppingCart from "./shopping-cart";
import GuestShopperStrategy from "./discount-strategies/guest-shopper";
import RegularShopperDiscountStrategy from "./discount-strategies/regular-shopper";
import PremiumShopperDiscountStrategy from "./discount-strategies/premium-shopper";
import HalfPriceDiscount from "./discount-strategies/half-price-discount";

describe("Testing the shopping cart class", () => {
  it("should set not discount when the shopper is a guest", () => {
    const guestStrategy = new GuestShopperStrategy();
    const shoppingCart = new ShoppingCart(guestStrategy);

    shoppingCart.setAmount(50);

    expect(shoppingCart.checkout()).toBe(50);
  });

  it("should set 90% discount to regular shoppers", () => {
    const regularShopperDiscount = new RegularShopperDiscountStrategy();
    const shoppingCart = new ShoppingCart(regularShopperDiscount);

    shoppingCart.setAmount(50);

    expect(shoppingCart.checkout()).toBe(45);
  });

  it("should set 80% discount to premium shoppers", () => {
    const regularShopperDiscount = new PremiumShopperDiscountStrategy();
    const shoppingCart = new ShoppingCart(regularShopperDiscount);

    shoppingCart.setAmount(50);

    expect(shoppingCart.checkout()).toBe(40);
  });

  it("should set 50% discount when the shopper has a half price discount", () => {
    const regularShopperDiscount = new HalfPriceDiscount();
    const shoppingCart = new ShoppingCart(regularShopperDiscount);

    shoppingCart.setAmount(50);

    expect(shoppingCart.checkout()).toBe(25);
  });
});
