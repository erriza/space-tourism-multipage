import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Destinations from './pages/Destinations';
import './App.css';
import Navbar from './pages/Navbar';
import Crew from './pages/Crew';
import Tech from './pages/Tech';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/' element={<Home/>}/>
              <Route path='destination' element={<Destinations/>}/>
              <Route path='crew' element={<Crew/>}/>
              <Route path='tech' element={<Tech/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
