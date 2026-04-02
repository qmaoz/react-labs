import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductsHomePage from './pages/ProductsHomePage';
import ProductsApiPage from './pages/ProductsApiPage';
import OwnProductsPage from './pages/OwnProductsPage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './components/Layout';

export default function App() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('products-data');

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Помилка парсингу JSON", e);
      }
    }

    return [
      // Default products
      { id: 1, title: 'Маргарита', price: 180, category: 'Піца', isSelected: false },
      { id: 2, title: 'Пепероні', price: 220, category: 'Піца', isSelected: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('products-data', JSON.stringify(products));
  }, [products]);

  return (
    <>
      <div className="app">
        <Routes>
          <Route element={<Layout />}> {/* Header + Footer */}
            <Route path='/' element={<HomePage products={products} setProducts={setProducts} />} />
            <Route path="/products" element={<ProductsPage />}>
              <Route index element={<ProductsHomePage />} />
              <Route path='api' element={<ProductsApiPage />} />
              <Route path='own' element={<OwnProductsPage products={products} setProducts={setProducts} />} />
            </Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/product/:id' element={<ProductDetailsPage products={products} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

// [
  // { id: 3, title: 'Чотири сири', price: 250, category: 'Піца', isSelected: false },
  // { id: 4, title: 'Кока-Кола', price: 40, category: 'Напої', isSelected: false },
  // { id: 5, title: 'Апельсиновий сік', price: 55, category: 'Напої', isSelected: false },
  // { id: 6, title: 'Чізбургер', price: 120, category: 'Бургери', isSelected: false },
  // { id: 7, title: 'Дабл Біф Бургер', price: 190, category: 'Бургери', isSelected: false },
  // { id: 8, title: 'Тірамісу', price: 95, category: 'Десерти', isSelected: false },
  // { id: 9, title: 'Чізкейк', price: 110, category: 'Десерти', isSelected: false },
  // { id: 10, title: 'Піца з морепродуктами', price: 310, category: 'Піца', isSelected: false },
  // { id: 11, title: 'Холодний чай', price: 45, category: 'Напої', isSelected: false },
  // { id: 12, title: 'Веган Бургер', price: 150, category: 'Бургери', isSelected: false }
// ]