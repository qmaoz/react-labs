export default function ProductCard({ name, price, category }) {
  return (
    <>
      <div className="product-card">
        <div className="title">{name}</div>
        <div className="price">Ціна: {price}₴</div>
        <div className="category">Категорія: {category}</div>
        <button className="buy-button">Купити</button>
      </div>
    </>
  )
}
