import { useParams, useNavigate, useLocation } from "react-router";
import { useLanguage } from '../context/LanguageContext';
import { Button } from "../components/ui";

export default function ProductDetailsPage({ products }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);
  const { language } = useLanguage();

  const { isRedirectAfterCreation } = useLocation().state || false;

  return (
    <>
      {!product ? (
        <>
          <p className="error">
            {language === 'en' 
              ? `Product with ID = ${id} not found.` 
              : `Товар з ID = ${id} не знайдено.`}
          </p>
        </>
      ) : (
        <>
          <h2>
            {language === 'en' 
              ? `Information about ${isRedirectAfterCreation ? 'newly created ' : ''}product` 
              : `Інформація про ${isRedirectAfterCreation ? 'щойно створений ' : ''}товар`}
          </h2>
          <table border='1'>
            <thead>
              <tr>
                <th>{language === 'en' ? 'Characteristic' : 'Характеристика'}</th>
                <th>{language === 'en' ? 'Value' : 'Значення'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{language === 'en' ? 'Product title' : 'Назва товару'}</td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Category' : 'Категорія'}</td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Price' : 'Ціна'}</td>
                <td>{product.price}{language === 'en' ? '$' : '₴'}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      <Button id="go-back-button" onClick={() => navigate(-1)}>
        {language === 'en' ? 'Back to list' : 'Повернутися до списку'}
      </Button>
    </>
  );
}