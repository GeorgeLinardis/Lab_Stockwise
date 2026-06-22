export const routes = {
  home: {
    path: () => "/",
    label: "Dashboard",
    title: "Dashboard",
  },
  stock: {
    path: (ticker: string) => `/stock/${ticker}`,
    label: null,
    title: (ticker: string) => `${ticker} · Analysis`,
  },
  login: {
    path: () => "/login",
    label: null,
    title: "Sign in",
  },
  styleguide: {
    path: () => "/styleguide",
    label: null,
    title: "Styleguide",
  },
} as const;
