import { useState } from "react";
import { Navigate } from "react-router";

export default function AddProductForm({ setProducts }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);

  const [newProduct, setNewProduct] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Пуста назва товару не приймається!');
      return;
    }

    if (category.trim() === '') {
      alert('Пуста назва категорії не приймається!');
      return;
    }
    
    if (price < 0) {
      alert('Від\'ємна ціна товару не приймається!');
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

    alert('Товар додано!');
  }

  return (
    <>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Додати товар</h2>
        <div className="form-row">
          <label htmlFor="title">Назва товару: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" id="title" placeholder="Назву товару" /><br />
        </div>
        <div className="form-row">
          <label htmlFor="category">Категорія: </label>
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} name="category" id="category" placeholder="Категорія товару" /><br />
        </div>
        <div className="form-row">
          <label htmlFor="price">Ціна: </label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} name="price" id="price" placeholder="Ціна товару" /><br />
        </div>
        <button className="add-product-button" type='submit'>Додати товар</button>
      </form>
      {newProduct && <Navigate to={`/product/${newProduct.id}`} state={{isRedirectAfterCreation: true}} replace={false} />}
    </>
  );
}