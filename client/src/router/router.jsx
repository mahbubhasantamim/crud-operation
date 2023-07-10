import { Route, Routes } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import Error from "../pages/Error";
import Home from "../pages/Home";

function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" re element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default Router;
