import money from "./money";

describe("money.display", () => {
  it("formats cents to 2 decimals with currency symbol", () => {
    expect(money.display(550, "EUR")).toBe("€5.50");
    expect(money.display(40000, "EUR")).toBe("€400.00");
    expect(money.display(199, "EUR")).toBe("€1.99");
  });

  it("formats cents to 3 decimals for TND", () => {
    expect(money.display(12345, "TND")).toBe("TND12.345");
  });

  it("formats cents without decimals for JPY", () => {
    expect(money.display(500, "JPY")).toBe("¥500");
  });

  it("handles zero value", () => {
    expect(money.display(0, "EUR")).toBe("€0.00");
  });

  it("throws if currencyCode is missing", () => {
    // @ts-expect-error — testing missing argument at runtime
    expect(() => money.display(1)).toThrow("cents and currencyCode is required");
  });

  it("throws if cents is not finite", () => {
    expect(() => money.display(NaN, "EUR")).toThrow("cents and currencyCode is required");
  });
});
