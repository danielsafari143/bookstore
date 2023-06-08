import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Main from './components/Main';

function App() {
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

