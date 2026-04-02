import ProductCardsBlock from "../components/ProductCardsBlock";

export default function OwnProductsPage({ products, setProducts }) {
  return (
    <>
      <span> &gt;Власні Товари</span><br /><br />
      <ProductCardsBlock products={products} setProducts={setProducts} />
    </>
  );
}