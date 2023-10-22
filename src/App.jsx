import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import "./App.css";
import DetailProduct from "./views/DetailProduct";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetail/:id" element={<DetailProduct />} />
        <Route path="*" element={<NotFound message="Pagina no encontrada"/>}/>
      </Routes>
    </>
  );
}

export default App;
