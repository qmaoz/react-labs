import ProductCard from "./ProductCard";

export default function ProductCardsBlock({ products, setProducts }) {
  return (
    <>
      <section>
        <div className="product-cards-block">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} category={product.category} bought={product.bought} setProducts={setProducts} />
          ))}
        </div>
      </section>
    </>
  );
}