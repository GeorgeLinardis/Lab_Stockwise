import currency from "currency.js";

const LOCALE = "en";

function getCurrencySymbol(currencyCode: string): string {
  const formatter = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: currencyCode,
  });

  const parts = formatter.formatToParts(0);
  const currencyPart = parts.find((part) => part.type === "currency");

  return currencyPart ? currencyPart.value : "";
}

/**
 * Convert an amount in minor units to a currency display string.
 * Decimal count is derived from currencyCode per ISO 4217 (USD=2, JPY=0, BHD=3).
 *
 * @example money.display(550, 'USD'); // "$5.50"
 */
function display(cents: number, currencyCode: string): string {
  if (!Number.isFinite(cents) || !currencyCode) {
    throw new Error("cents and currencyCode is required");
  }

  const { maximumFractionDigits } = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: currencyCode,
  }).resolvedOptions();

  return currency(cents, {
    fromCents: true,
    precision: maximumFractionDigits,
    symbol: getCurrencySymbol(currencyCode),
  }).format();
}

const money = { display };
export default money;
