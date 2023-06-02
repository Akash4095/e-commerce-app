import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
