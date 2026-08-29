import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import { Home } from './Page/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
