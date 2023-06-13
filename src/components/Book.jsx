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
        <div className="book-item">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>
        </div>
        <div className="btn-container">
          <button className="btn-link" type="button">Comments</button>
          <button className="btn-link" type="button" onClick={() => disptch(removesBook(id))}>Remove</button>
          <button className="btn-link" type="button">Edit</button>
        </div>
      </div>
      <div className="loading">
        <div className="Oval-2" />
        <div>
          <p className="completed">100%</p>
          <p className="crt">Completed</p>
        </div>
      </div>
      <div className="crt-text">
        <p className="crt">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button" className="btn-cls btn-progress">UPDATE PROGRESS</button>
      </div>
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
