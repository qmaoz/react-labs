import { useParams, useNavigate, useLocation } from "react-router";

export default function ProductDetailsPage({ products }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);

  const { isRedirectAfterCreation } = useLocation().state || false;
  
  return (
    <>
      {!product ? (
        <>
          <p className="error">Товар з ID = {id} не знайдено.</p>
        </>
      ) : (
        <>
          <h2>Інформація про {isRedirectAfterCreation && 'щойно створений'} товар</h2>
          <table border='1'>
            <thead>
              <tr>
                <th>Характеристика</th>
                <th>Значення</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Назва товару</td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td>Категорія</td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td>Ціна</td>
                <td>{product.price}₴</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      <button className="go-back-button" onClick={() => navigate(-1)}>Повернутися до списку</button>
    </>
  );
}