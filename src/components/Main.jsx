import FiltrationBlock from "./FiltrationBlock";
import ProductCardsBlock from "./ProductCardsBlock";

export default function Main({ pruducts, setProducts }) {
  function clearOrder() {
    setProducts(prev =>
      prev.map(p =>
        !p.bought ? p : { ...p, bought: false }
      )
    );
  }

  return (
    <main className="main">
      <FiltrationBlock />
      <ProductCardsBlock products={pruducts} setProducts={setProducts} />
      <button className="order-button" onClick={clearOrder}>Зробити замовлення</button>
    </main>
  );
}