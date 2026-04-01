import { useEffect, useState } from 'react';
import ProductCardsBlock from './ProductCardsBlock';

export default function ApiProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // null or error string
  const [products, setProducts] = useState([]); // list of products

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://dummyjson.com/products?limit=12');
        if (!res.ok) throw new Error(`Помилка запиту: ${res.status}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (e) {
        setError(e.message || 'Невідома помилка під час отримання продуктів із сервісу dummyjson.com/products');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <section>
        <h2>Товари з API</h2>

        {loading && <p>Завантаження...</p>}

        {error && (
          <p className="error">⚠️ Помилка: {error}</p>
        )}

        {!loading && !error && (
          <ProductCardsBlock products={products} setProducts={setProducts} />
        )}
      </section>
    </>
  );
}