import { Link } from "react-router";
import { useLanguage } from '../context/LanguageContext';


export default function ProductCard({ id, title, price, category, isSelected, setProducts }) {
  const { language } = useLanguage();
  
  function handleBuy() {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, isSelected: !p.isSelected } : p
      )
    );
  }

  return (
    <>
      <div className={`product-card ${isSelected ? 'selected' : ''}`}>
        <div className="title">
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
        
        <div className="price">
          {language === 'en' ? 'Price: ' : 'Ціна: '} 
          {price} ₴
        </div>
        
        <div className="category">
          {language === 'en' ? 'Category: ' : 'Категорія: '} 
          {category}
        </div>
        
        <button className="buy-button" onClick={handleBuy}>
          {isSelected 
            ? (language === 'en' ? 'Cancel' : 'Скасувати') 
            : (language === 'en' ? 'Add to cart' : 'Додати в кошик')
          }
        </button>
        <div className="top-right-corner-point">
          <div className={`product-card-tape ${isSelected ? 'shown' : ''}`}>{language === 'en' ? 'In cart' : 'В кошику'}</div>
        </div>
      </div>
    </>
  )
}
