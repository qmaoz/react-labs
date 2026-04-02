import { Link } from "react-router";
import { useLanguage } from '../context/LanguageContext';

export default function ProductsHomePage() {
  const { language } = useLanguage();

  return (
    <>
      <br /><br />
      <Link to='/products/api'>
        {language === 'en' ? 'View products from API' : 'Переглянути товари з API'}
      </Link>
      <br /><br />
      <Link to='/products/own'>
        {language === 'en' ? 'View own products' : 'Переглянути власні товари'}
      </Link>
    </>
  );
}