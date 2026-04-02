import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    const value = e.target.value || 'uk';
    setLanguage(value);
  }

  return (
    <header className="header">
      <h1>Vitrino</h1>
      <nav>
        <ul>
          <li><NavLink to='/' end>{language === 'en' ? 'Home' : 'Головна'}</NavLink></li>
          <li><NavLink to='/products' end>{language === 'en' ? 'Products' : 'Товари'}</NavLink></li>
          <li><NavLink to='/about'>{language === 'en' ? 'About Us' : 'Про нас'}</NavLink></li>
        </ul>
        <button onClick={toggleTheme} className="change-theme-button">
          {/*  */}
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <select name="language" id="language" value={language} onChange={handleLanguageChange}>
          <option value="uk">{language === 'en' ? 'Ukrainian' : 'Українська'}</option>
          <option value="en">{language === 'en' ? 'English' : 'Англійська'}</option>
        </select>
      </nav>
    </header>
  );
}