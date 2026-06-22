import { useLocation, useMatch } from "react-router-dom";

import { routes } from "@/routes";

export function usePageTitle(): string {
  const location = useLocation();
  const stockMatch = useMatch(routes.stock.path(":ticker"));

  if (stockMatch?.params.ticker) {
    return routes.stock.title(stockMatch.params.ticker);
  }
  if (location.pathname === routes.home.path()) {
    return routes.home.title;
  }
  return "";
}
