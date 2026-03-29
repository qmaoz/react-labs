import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

const products = [
  { id: 1, name: 'Маргарита', price: 180, category: 'Піца' },
  { id: 2, name: 'Пепероні', price: 220, category: 'Піца' },
  { id: 3, name: 'Чотири сири', price: 250, category: 'Піца' },
  { id: 4, name: 'Кока-Кола', price: 40, category: 'Напої' },
  { id: 5, name: 'Апельсиновий сік', price: 55, category: 'Напої' },
  { id: 6, name: 'Чізбургер', price: 120, category: 'Бургери' },
  { id: 7, name: 'Дабл Біф Бургер', price: 190, category: 'Бургери' },
  { id: 8, name: 'Тірамісу', price: 95, category: 'Десерти' },
  { id: 9, name: 'Чізкейк', price: 110, category: 'Десерти' },
  { id: 10, name: 'Піца з морепродуктами', price: 310, category: 'Піца' },
  { id: 11, name: 'Холодний чай', price: 45, category: 'Напої' },
  { id: 12, name: 'Веган Бургер', price: 150, category: 'Бургери' }
];

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Main pruducts={products} />
        <Footer />
      </div>
    </>
  )
}
