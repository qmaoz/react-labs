import { useState } from "react";
import FiltrationBlock from "./FiltrationBlock";
import ProductCardsBlock from "./ProductCardsBlock";
import AddProductForm from "./AddProductForm"
import { useLanguage } from '../context/LanguageContext';
import { Button } from "./ui";

export default function Main({ products, setProducts }) {
  const { language } = useLanguage();
  
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  
  const [currentCategory, setCurrentCategory] = useState('Всі'); 

  const productsToDisplay = products.filter((product) => {
    if (currentCategory !== 'Всі' && product.category !== currentCategory) {
      return false;
    }
    return true;
  });

  function clearOrder() {
    setProducts(prev =>
      prev.map(p =>
        !p.isSelected ? p : { ...p, isSelected: false }
      )
    );
    
    alert(language === 'en' ? 'Order placed successfully!' : 'Замовлення успішно оформлено!');
  }

  return (
    <main className="main">
      <AddProductForm setProducts={setProducts} />
      
      <FiltrationBlock 
        uniqueCategories={uniqueCategories} 
        currentCategory={currentCategory} 
        setCurrentCategory={setCurrentCategory} 
      />
      
      <section>
        <ProductCardsBlock products={productsToDisplay} setProducts={setProducts} />
      </section>

      <Button id="order-button" onClick={clearOrder}>
        {language === 'en' ? 'Place order' : 'Зробити замовлення'}
      </Button>
    </main>
  );
}