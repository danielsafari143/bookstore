import { Link } from 'react-router-dom';
import IconAccountBox from './svg/IconAccountBox';

const Navbar = () => (
  <header>
    <div className="heade">
      <h1>BookStore CMS</h1>
      <nav>
        <Link className="link" to="/">BOOKS</Link>
        <Link className="link link-live" to="categories">CATEGORIES</Link>
      </nav>
    </div>
    <IconAccountBox />
  </header>
);

export default Navbar;
