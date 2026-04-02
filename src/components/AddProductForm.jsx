import { useState } from "react";
import { Navigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export default function AddProductForm({ setProducts }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);

  const [newProduct, setNewProduct] = useState(null);

  const { language } = useLanguage();

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      alert(language === 'en' ? 'Empty product name is not accepted!' : 'Пуста назва товару не приймається!');
      return;
    }

    if (category.trim() === '') {
      alert(language === 'en' ? 'Empty category name is not accepted!' : 'Пуста назва категорії не приймається!');
      return;
    }

    if (price < 0) {
      alert(language === 'en' ? 'Negative product price is not accepted!' : "Від'ємна ціна товару не приймається!");
      return;
    }

    const productToAdd = {
      id: Date.now(),
      title: title.trim(),
      category: category.trim(),
      price: Math.abs(price),
      isSelected: false
    };

    // Back to default values
    setTitle('');
    setCategory('');
    setPrice(0);

    setProducts(prev =>
      [...prev, productToAdd]
    );

    setNewProduct(productToAdd);

    alert(language === 'en' ? 'Product added!' : 'Товар додано!');
  }

  return (
    <>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>{language === 'en' ? 'Add product' : 'Додати товар'}</h2>
        
        <div className="form-row">
          <label htmlFor="title">
            {language === 'en' ? 'Product title:' : 'Назва товару:'}
          </label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            name="title" 
            id="title" 
            placeholder={language === 'en' ? 'Product name' : 'Назва товару'} 
          /><br />
        </div>

        <div className="form-row">
          <label htmlFor="category">
            {language === 'en' ? 'Category:' : 'Категорія:'}
          </label>
          <input 
            type="text" 
            value={category} 
            onChange={e => setCategory(e.target.value)} 
            name="category" 
            id="category" 
            placeholder={language === 'en' ? 'Product category' : 'Категорія товару'} 
          /><br />
        </div>

        <div className="form-row">
          <label htmlFor="price">
            {language === 'en' ? 'Price:' : 'Ціна:'}
          </label>
          <input 
            type="number" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
            name="price" 
            id="price" 
            placeholder={language === 'en' ? 'Product price' : 'Ціна товару'} 
          /><br />
        </div>

        <button className="add-product-button" type='submit'>
          {language === 'en' ? 'Add product' : 'Додати товар'}
        </button>
      </form>

      {newProduct && (
        <Navigate 
          to={`/product/${newProduct.id}`} 
          state={{isRedirectAfterCreation: true}} 
          replace={false} 
        />
      )}
    </>
  );
}