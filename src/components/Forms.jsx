import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { creatBook } from '../redux/books/booksSlice';

const Forms = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="forme">
      <h3>ADD NEW BOOK</h3>
      <div>
        <form className="inputs">
          <input className="inpt-cls" type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <input className="inpt-cls" type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
          <input
            className="btn-cls"
            type="button"
            value="ADD BOOK"
            onClick={() => dispatch(creatBook({
              item_id: nanoid(),
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
