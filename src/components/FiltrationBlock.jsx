import { useLanguage } from "../context/LanguageContext";

export default function FiltrationBlock({ uniqueCategories, setCurrentCategory }) {
  const { language } = useLanguage();

  const handleChangeSelectedOption = (e) => {
    const selectedTag = e.target.value;
    setCurrentCategory(selectedTag)
  };
  
  return (
    <>
      <div className="filtration-block">
        <h2>{language === 'en' ? 'Filter products' : 'Відфільтрувати товари'}</h2>

        <div className="form-row">
          <label htmlFor="category">
            {language === 'en' ? 'Category:' : 'Категорія:'}
          </label>
          
          <select name="category" id="category" onChange={handleChangeSelectedOption}>
            <option value="Всі">
              {language === 'en' ? 'All' : 'Всі'}
            </option>
            <option value="Недійсна">
              {language === 'en' ? 'Invalid (for test)' : 'Недійсна (для тесту)'}
            </option>

            {uniqueCategories.map(category =>
              <option key={category.toString()} value={category}>
                {category}
              </option>
            )}
          </select>
        </div>
      </div>
    </>
  );
}
