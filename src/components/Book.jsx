import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removesBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const disptch = useDispatch();

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button" onClick={() => disptch(removesBook(id))}>remove a book</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default Book;
