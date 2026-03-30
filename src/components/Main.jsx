import { useState } from "react";
import FiltrationBlock from "./FiltrationBlock";
import ProductCardsBlock from "./ProductCardsBlock";

export default function Main({ products, setProducts }) {
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const [currentCategory, setCurrentCategory] = useState('Всі'); // 'Всі' or a specific category

  const productsToDisplay = products.filter((product) =>{
    if (currentCategory !== 'Всі' && product.category !== currentCategory) false;
    else return true;
  });

  function clearOrder() {
    setProducts(prev =>
      prev.map(p =>
        !p.isSelected ? p : { ...p, isSelected: false }
      )
    );
  }

  return (
    <main className="main">
      <FiltrationBlock uniqueCategories={uniqueCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <ProductCardsBlock products={productsToDisplay} setProducts={setProducts} />
      <button className="order-button" onClick={clearOrder}>Зробити замовлення</button>
    </main>
  );
}