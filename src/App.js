import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Create from './pages/create/Create';
import Description from './pages/description/Description';
import Search from './pages/search/Search';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/trips/:id" element={<Description />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;