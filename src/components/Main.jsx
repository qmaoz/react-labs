import FiltrationBlock from "./FiltrationBlock";
import ProductCardsBlock from "./ProductCardsBlock";

export default function Main({ pruducts }) {
  return (
    <main className="main">
      <FiltrationBlock />
      <ProductCardsBlock products={pruducts} />
    </main>
  );
}