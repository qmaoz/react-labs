import { useEffect, useState } from 'react';
import ProductCardsBlock from './ProductCardsBlock';
import { useLanguage } from '../context/LanguageContext';

export default function ApiProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // null or error string
  const [products, setProducts] = useState([]); // list of products

  const { language } = useLanguage();

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch('https://dummyjson.com/products?limit=12');
        
        if (!res.ok) {
          const statusError = language === 'en' 
            ? `Request error: ${res.status}` 
            : `Помилка запиту: ${res.status}`;
          throw new Error(statusError);
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (e) {
        const defaultError = language === 'en'
          ? 'Unknown error while fetching products from dummyjson.com'
          : 'Невідома помилка під час отримання продуктів із сервісу dummyjson.com';
        
        setError(e.message || defaultError);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [language]);

  return (
    <>
      <section>
        <h2>{language === 'en' ? 'Products from API' : 'Товари з API'}</h2>

        {loading && (
          <p>{language === 'en' ? 'Loading...' : 'Завантаження...'}</p>
        )}

        {error && (
          <p className="error">
            ⚠️ {language === 'en' ? 'Error' : 'Помилка'}: {error}
          </p>
        )}

        {!loading && !error && (
          <ProductCardsBlock products={products} setProducts={setProducts} />
        )}
      </section>
    </>
  );
}