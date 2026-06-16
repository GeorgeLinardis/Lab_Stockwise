import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import StyleguidePage from "@/pages/StyleguidePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {import.meta.env.DEV && <Route path="/styleguide" element={<StyleguidePage />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
