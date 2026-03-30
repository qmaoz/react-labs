export default function ProductCard({ id, name, price, category, bought, setProducts }) {
  function handleBuy() {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, bought: !p.bought } : p
      )
    );
  }

  return (
    <>
      <div className={`product-card ${bought ? 'bought' : '' }`}>
        <div className="title">{name}</div>
        <div className="price">Ціна: {price}₴</div>
        <div className="category">Категорія: {category}</div>
        <button className="buy-button" onClick={handleBuy}>{bought ? 'Скасувати' : 'Додати в кошик'}</button>
      </div>
    </>
  )
}
