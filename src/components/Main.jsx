import { useState } from "react";
import FiltrationBlock from "./FiltrationBlock";
import ProductCardsBlock from "./ProductCardsBlock";
import AddProductForm from "./AddProductForm"
import ApiProducts from "./ApiProducts";

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
      <AddProductForm setProducts={setProducts} />
      <FiltrationBlock uniqueCategories={uniqueCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <section>
        <ProductCardsBlock products={productsToDisplay} setProducts={setProducts} />
      </section>
      <ApiProducts />
      <button className="order-button" onClick={clearOrder}>Зробити замовлення</button>
    </main>
  );
}