import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <h2>{language === 'en' ? 'About Vitrino Website' : 'Про сайт Vitrino'}</h2>
      <p className="paragraph">
        {language === 'en' 
          ? 'Purpose of creation: the need for an online showcase with product cards, where the process of browsing and purchasing products is very fast and convenient. The site will allow you to view product cards, select the desired products, and place orders.' 
          : 'Мета створення: потреба в інтернет-вітрині з картками товарів, де процес перегляду та купівлі товарів дуже швидкий та зручний. Сайт дозволятиме переглядати картки товарів, обирати потрібні товари та робити замовлення.'}
      </p>
      <p className="paragraph">
        {language === 'en'
          ? 'General functionality: in the current version, the application displays product cards with a title, price, category, and an "Add to cart" button. When clicking the "Add to cart" button, the product visually changes, and the button is renamed to "Cancel," allowing you to remove the product from the cart. There is a product filtration form on the page, which allows viewing only products in a specific category. When clicking the "Place order" button, all elements return to their default state, simulating the completion of the order process. There is a form for adding a new product on the page. To add a product, it is enough to specify its name, category, and price. Basic validation of the product addition form is implemented to avoid empty product names, empty category names, and negative prices. Products are stored in the browser\'s LocalStorage, so both newly created products and their state are preserved after reloading the page. There is also a block with product cards loaded using an API, but these cards do not function or filter — they only demonstrate the use of an API on the site.'
          : 'Загальна функціональність: у поточній версії застосунок відображає картки товарів з назвою, ціною, категорією та кнопкою «Додати в кошик». При натисканні на кнопку «Додати в кошик» товар візуально змінюється, а кнопка перейменовується на «Скасувати», що дозволяє прибрати продукт із кошику. На сторінці є форма фільтрації товарів, що дозволяє переглянути лише товари в певній категорії. При натисканні на кнопку «Зробити замовлення» всі елементи повертаються до стану за замовчуванням, що імітує процес завершення замовлення. На сторінці є форма додавання нового товару. Для додавання товару достатньо вказати його назву, категорію та ціну. Реалізовано базову валідацію форми додавання нового товару, щоб уникнути пустих назв товарів, пустих назв категорій та від’ємних цін. Товари зберігаються у LocalStorage браузера, тому після перезавантаження сторінки зберігаються як новостворені товари, так і їх стан. На сторінці також є блок із картками товарів, які завантажені з використанням API, але ці картки не функціонують і не фільтруються — вони лише презентують використання API на сайті.'}
      </p>
      <p className="paragraph">
        {language === 'en'
          ? 'Currently, several pages have been created on the site, and navigation between them is implemented using the React Router library.'
          : 'На разі на сайті створено декілька сторінок, а навігацію між ними реалізовано з використанням бібліотеки React Router.'}
      </p>
    </>
  );
}