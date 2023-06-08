import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>BookStore CMS</h1>
    <nav>
      <Link className="link" to="/">BOOKS</Link>
      <Link className="link" to="categories">CATEGORIES</Link>
    </nav>
  </header>
);

export default Navbar;
