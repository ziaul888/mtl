import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*">
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<SingleProductPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
