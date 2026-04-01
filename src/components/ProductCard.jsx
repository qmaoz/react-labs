export default function ProductCard({ id, title, price, category, isSelected, setProducts }) {
  function handleBuy() {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, isSelected: !p.isSelected } : p
      )
    );
  }

  return (
    <>
      <div className={`product-card ${isSelected ? 'selected' : '' }`}>
        <div className="title">{title}</div>
        <div className="price">Ціна: {price}₴</div>
        <div className="category">Категорія: {category}</div>
        <button className="buy-button" onClick={handleBuy}>{isSelected ? 'Скасувати' : 'Додати в кошик'}</button>
      </div>
    </>
  )
}
