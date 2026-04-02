import Main from '../components/Main';

export default function HomePage({ products, setProducts }) {
  return (
    <>
      <Main products={products} setProducts={setProducts} />
    </>
  );
}