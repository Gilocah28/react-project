import axios from "axios";
import { Product } from "./Product";

const ProductGrid = ({ products, loadCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
};

export default ProductGrid;
