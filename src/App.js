import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/'>
          <About />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
