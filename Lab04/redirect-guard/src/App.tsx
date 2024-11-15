import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import './components/ExternalRedirectPopup/ExternalRedirectPopup.css';
import { ExternalRedirectProvider } from './contexts/ExternalRedirectContext';

function App() {
  return (
    <BrowserRouter>
      <ExternalRedirectProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ExternalRedirectProvider>
    </BrowserRouter>
  )
}

export default App;