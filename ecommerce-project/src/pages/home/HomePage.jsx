import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
