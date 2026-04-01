import ProductCard from "./ProductCard";

export default function ProductCardsBlock({ products, setProducts }) {
  return (
    <>
      {products.length === 0 ? (
        <p className="warning">⚠️ Немає продуктів для відображення.</p>
      ) : (
        <div className="product-cards-block">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category} isSelected={product.isSelected} setProducts={setProducts} />
          ))}
        </div>
      )}
    </>
  );
}