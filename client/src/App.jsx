import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/404Page/ErrorPage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};

export default App;
