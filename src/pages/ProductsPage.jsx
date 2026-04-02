import { Outlet, NavLink } from "react-router";
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const { language } = useLanguage();

  return (
    <>
      <NavLink to='/products' end>
        {language === 'en' ? 'Products' : 'Товари'}
      </NavLink>
      <Outlet />
    </>
  );
}