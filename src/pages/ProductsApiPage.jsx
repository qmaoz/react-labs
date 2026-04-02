import ApiProducts from "../components/ApiProducts";
import { useLanguage } from '../context/LanguageContext';

export default function ProductsApiPage() {
  const { language } = useLanguage();

  return (
    <>
      <span> &gt; {language === 'en' ? 'Products from API' : 'Товари з API'}</span><br /><br />
      <ApiProducts />
    </>
  );
}