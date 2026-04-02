import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="header">
      <h1>Vitrino</h1>
      <nav>
        <ul>
          <li><NavLink to='/' end>Головна</NavLink></li>
          <li><NavLink to='/products' end>Товари</NavLink></li>
          <li><NavLink to='/about'>Про нас</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}