import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const Forms = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div>
        <form>
          <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
          <input
            type="button"
            value="ADD BOOK"
            onClick={() => dispatch(addBook({
              item_id: `item${data.books.length + 1}`,
              title,
              author,
              category: 'Fiction',
            }))}
          />
        </form>
      </div>
    </div>
  );
};

export default Forms;
