import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Main from './components/Main';
import { fetchBook } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  });

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<h1>CATEGORIES</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
