import { useState } from "react";

export default function AddProductForm({ setProducts }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '') {
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

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      price: Math.abs(price),
      isSelected: false
    };

    // Back to default values
    setName('');
    setCategory('');
    setPrice(0);

    setProducts(prev =>
      [...prev, newProduct]
    );

    alert('Товар додано!');
  }

  return (
    <>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Додати товар</h2>
        <div className="form-row">
          <label htmlFor="name">Назва товару: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" placeholder="Назву товару" /><br />
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
    </>
  );
}