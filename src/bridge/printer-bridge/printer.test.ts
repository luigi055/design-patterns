import { EpsonPrinter, HPPrinter } from "./printer";
import { AlcoholInk, AcrylicInk } from "./ink";

describe("Testing Printer Bridge", () => {
  it("Should be a Epson Printer with alcohol-base ink", () => {
    const alcoholInk = new AlcoholInk();
    const epsonAlcoholBasedPrinter = new EpsonPrinter(alcoholInk);

    expect(epsonAlcoholBasedPrinter.print()).toBe(
      "Epson Printer with Alcohol-based ink"
    );
  });

  it("Should be a HP Printer with alcohol-base ink", () => {
    const alcoholInk = new AlcoholInk();
    const hpAlcoholBasedPrinter = new HPPrinter(alcoholInk);

    expect(hpAlcoholBasedPrinter.print()).toBe(
      "HP Printer with Alcohol-based ink"
    );
  });

  it("Should be a Epson Printer with acrylic-base ink", () => {
    const acrylicInk = new AcrylicInk();
    const epsonAcrylicBasedPrinter = new EpsonPrinter(acrylicInk);

    expect(epsonAcrylicBasedPrinter.print()).toBe(
      "Epson Printer with Acrylic-based ink"
    );
  });

  it("Should be a HP Printer with acrylic-base ink", () => {
    const acrylicInk = new AcrylicInk();
    const hpAcrylicBasedPrinter = new HPPrinter(acrylicInk);

    expect(hpAcrylicBasedPrinter.print()).toBe(
      "HP Printer with Acrylic-based ink"
    );
  });
});
