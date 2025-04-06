import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import { HomePage } from "./components/home/HomePage";
import { NotFoundPage } from "./components/ui/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🧠 ESTA ES LA RUTA PADRE */}
        <Route path="/" element={<MainLayout />}>
          {/* 👇 RUTA HIJA que se renderiza dentro de <Outlet /> */}
          <Route index element={<HomePage />} />
        </Route>

        {/* 🔁 Ruta para cuando no se encuentra la página */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
