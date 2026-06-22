import { BrowserRouter, Route, Routes } from "react-router-dom";

import ShellLayout from "@/components/layout/ShellLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import StockPage from "@/pages/StockPage";
import StyleguidePage from "@/pages/StyleguidePage";
import { routes } from "@/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShellLayout />}>
          <Route path={routes.home.path()} element={<HomePage />} />
          <Route path={routes.stock.path(":ticker")} element={<StockPage />} />
        </Route>
        <Route path={routes.login.path()} element={<LoginPage />} />
        {import.meta.env.DEV && (
          <Route path={routes.styleguide.path()} element={<StyleguidePage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
