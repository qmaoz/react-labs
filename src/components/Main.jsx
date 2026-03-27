import ProductCard from "./ProductCard";
import FiltrationBlock from "./FiltrationBlock";

const testProducts = [
  {id: 1, name: 'Піца', price: 200, category: 'їжа'},
  {id: 2, name: 'Піца', price: 200, category: 'їжа'},
  {id: 3, name: 'Піца', price: 200, category: 'їжа'},
  {id: 4, name: 'Піца', price: 200, category: 'їжа'},
  {id: 5, name: 'Піца', price: 200, category: 'їжа'},
  {id: 6, name: 'Піца', price: 200, category: 'їжа'},
];

export default function Main() {
  return (
    <main className="main">
      <FiltrationBlock></FiltrationBlock>
      <section className="panel">
        <div className="product-cards-block">
          {testProducts.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}