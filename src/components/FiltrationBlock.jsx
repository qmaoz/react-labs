export default function FiltrationBlock({ uniqueCategories, setCurrentCategory }) {
  const handleChangeSelectedOption = (e) => {
    const selectedTag = e.target.value;
    setCurrentCategory(selectedTag)
  };
  
  return (
    <>
      <div className="filtration-block">
        <h2>Відфільтрувати товари</h2>
        <div className="form-row">
          <label htmlFor="category">Категорія: </label>
          <select name="category" id="category" onChange={handleChangeSelectedOption}>
            {/* Default static option */}
            <option value="Всі">Всі</option>
            <option value="Недійсна">Недійсна (для тесту)</option>

            {/* Dynamic options */}
            {uniqueCategories.map(category =>
              <option key={category.toString()} value={category}>{category}</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
}
