import ProductCard from "./ProductCard";
import { useLanguage } from '../context/LanguageContext';

export default function ProductCardsBlock({ products, setProducts }) {
  const { language } = useLanguage();

  return (
    <>
      {products.length === 0 ? (
        <p className="warning">⚠️ {language === 'en' ? 'No products to display' : 'Немає продуктів для відображення'}.</p>
      ) : (
        <div className="product-cards-block">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category} isSelected={product.isSelected} setProducts={setProducts} />
          ))}
        </div>
      )}
    </>
  );
}