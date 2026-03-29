import ProductCard from "./ProductCard";

export default function ProductCardsBlock({ products }) {
  return (
    <>
      <section>
        <div className="product-cards-block">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} category={product.category} />
          ))}
        </div>
      </section>
    </>
  );
}