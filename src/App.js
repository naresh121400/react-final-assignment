import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Product } from "./components/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h3>Home Page</h3>} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<h3>About Us</h3>} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
