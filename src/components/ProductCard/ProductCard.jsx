import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='productCard' key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
