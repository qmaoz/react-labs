import { Outlet, NavLink } from "react-router";

export default function ProductsPage() {
  return (
    <>
      <NavLink to='/products' end>Товари</NavLink>
      <Outlet />
    </>
  );
}