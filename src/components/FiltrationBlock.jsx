export default function FiltrationBlock() {
  return (
    <>
      <div className="filtration-block">
        <h2>Відфільтрувати товари</h2>

        <div className="form-row">
          <label htmlFor="name">Назва товару: </label>
          <input type="text" name="name" id="name" placeholder="Назву товару" /><br />
        </div>

        <div className="form-row">
          <label htmlFor="min-price">Ціна: від </label>
          <input type="number" min={0} name="min-price" id="min-price" placeholder="Мін. ціна" />
          <label htmlFor="max-price"> до: </label>
          <input type="number" min={0} name="max-price" id="max-price" placeholder="Макс. ціна" /><br />
        </div>

        <div className="form-row">
          <label htmlFor="category">Категорія: </label>
          <input type="text" name="category" id="category" placeholder="Категорія товару" />
        </div>
      </div>
    </>
  )
}
