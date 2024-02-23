import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className='productList'>
      {products.length == 0 ? (
        <div className='loader'></div>
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
}

export default ProductsList;
