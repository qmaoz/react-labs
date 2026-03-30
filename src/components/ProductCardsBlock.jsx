import ProductCard from "./ProductCard";

export default function ProductCardsBlock({ products, setProducts }) {
  return (
    <>
      <section>
        {products.length === 0 ? (
          <p className="warning">⚠️ Немає продуктів для відображення.</p>
        ) : (
          <div className="product-cards-block">
            {products.map((product) => (
              <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} category={product.category} isSelected={product.isSelected} setProducts={setProducts} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}