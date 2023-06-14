import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Alert from './Alert';
import { creatBook } from '../redux/books/booksSlice';

const Forms = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

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
            onClick={() => {
              if (title.length > 1 && author.length > 1) {
                setShow(false);
                return dispatch(creatBook({
                  item_id: nanoid(),
                  title,
                  author,
                  category: 'Fiction',
                }));
              }
              return setShow((previousValue) => !previousValue);
            }}
          />
        </form>
      </div>
      {
        show && <Alert />
      }
    </div>
  );
};

export default Forms;
