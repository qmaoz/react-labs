import ProductCardsBlock from "../components/ProductCardsBlock";
import { useLanguage } from '../context/LanguageContext';

export default function OwnProductsPage({ products, setProducts }) {
  const { language } = useLanguage();

  return (
    <>
      <span> &gt;{language === 'en' ? 'Own Products' : 'Власні Товари'}</span><br /><br />
      <ProductCardsBlock products={products} setProducts={setProducts} />
    </>
  );
}