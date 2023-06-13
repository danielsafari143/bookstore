import { useSelector } from 'react-redux';
import Book from './Book';
import Forms from './Forms';

const Books = () => {
  const bookCount = useSelector((state) => state.books);
  return (
    <div className="container">
      <ul>
        {
           bookCount.books.map((item) => (
             <Book
               key={item.id}
               id={item.id}
               title={item.title}
               author={item.author}
               category={item.category}
             />
           ))
         }
      </ul>
      <Forms />
    </div>
  );
};

export default Books;
