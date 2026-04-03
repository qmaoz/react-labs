import { Link } from "react-router";
import { useLanguage } from '../../context/LanguageContext';
import { Button, Card } from "../ui";

import classes from './ProductCard.module.css';
import clsx from 'clsx';

export default function ProductCard({ id, title, price, category, isSelected, setProducts }) {
  const { language } = useLanguage();
  
  function handleToggleProductSelect() {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, isSelected: !p.isSelected } : p
      )
    );
  }

  return (
    <>
      <Card className={`product-card ${isSelected ? 'selected' : ''}`}>
        <Card.Body>
          <div className={classes.title}>
            <Link to={`/product/${id}`}>{title}</Link>
          </div>
          
          <div>
            {language === 'en' ? 'Price: ' : 'Ціна: '} 
            {price} ₴
          </div>
          
          <div>
            {language === 'en' ? 'Category: ' : 'Категорія: '} 
            {category}
          </div>
        </Card.Body>

        <Card.Footer>
          <Button onClick={handleToggleProductSelect}>
            {isSelected 
              ? (language === 'en' ? 'Cancel' : 'Скасувати') 
              : (language === 'en' ? 'Add to cart' : 'Додати в кошик')
            }
          </Button>
        </Card.Footer>
        
        <div className={classes.topRightCornerPoint}>
          <div className={clsx(classes.productCardTape, `${isSelected ? classes.shown : ''}`)}>
            {language === 'en' ? 'In cart' : 'В кошику'}
          </div>
        </div>
      </Card>
    </>
  )
}
