import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  const getHomeData = async () => {
    const response = await axios.get("/api/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

export default HomePage;
