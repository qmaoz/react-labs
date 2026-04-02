import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  return (
    <>
      <h2>
        {language === 'en' ? 'Page not found' : 'Сторінку не знайдено'}
      </h2>
      <p className="paragraph">
        {language === 'en' 
          ? 'If you reached this page by mistake, please return to the previous page or the home page.' 
          : 'Якщо Ви помилково потрапили на цю сторінку, поверніться на попередню сторінку або на головну.'}
      </p>
    </>
  );
}