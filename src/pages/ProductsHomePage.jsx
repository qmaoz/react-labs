import { Link } from "react-router";

export default function ProductsHomePage() {
  return (
    <>
      <br /><br />
      <Link to='/products/api'>Переглянути товари з API</Link>
      <br /><br />
      <Link to='/products/own'>Переглянути власні товари</Link>
    </>
  );
}