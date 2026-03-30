import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Маргарита', price: 180, category: 'Піца', isSelected: false },
    { id: 2, name: 'Пепероні', price: 220, category: 'Піца', isSelected: false },
    { id: 3, name: 'Чотири сири', price: 250, category: 'Піца', isSelected: false },
    { id: 4, name: 'Кока-Кола', price: 40, category: 'Напої', isSelected: false },
    { id: 5, name: 'Апельсиновий сік', price: 55, category: 'Напої', isSelected: false },
    // { id: 6, name: 'Чізбургер', price: 120, category: 'Бургери', isSelected: false },
    // { id: 7, name: 'Дабл Біф Бургер', price: 190, category: 'Бургери', isSelected: false },
    // { id: 8, name: 'Тірамісу', price: 95, category: 'Десерти', isSelected: false },
    // { id: 9, name: 'Чізкейк', price: 110, category: 'Десерти', isSelected: false },
    // { id: 10, name: 'Піца з морепродуктами', price: 310, category: 'Піца', isSelected: false },
    // { id: 11, name: 'Холодний чай', price: 45, category: 'Напої', isSelected: false },
    // { id: 12, name: 'Веган Бургер', price: 150, category: 'Бургери', isSelected: false }
  ]);

  return (
    <>
      <div className="app">
        <Header />
        <Main products={products} setProducts={setProducts} />
        <Footer />
      </div>
    </>
  );
}
