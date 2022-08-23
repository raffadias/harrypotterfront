import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Spells from './pages/Spells';
import Houses from './pages/Houses';
import Gryffindor from './pages/Gryffindor';
import Slytherin from './pages/Slytherin';
import Hufflepuff from './pages/Hufflepuff';
import Ravenclaw from './pages/Ravenclaw';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/spells" element={<Spells/>}/>
      <Route path="/houses" element={<Houses/>}/>
      <Route path="/gryffindor" element={<Gryffindor/>}/>
      <Route path="/slytherin" element={<Slytherin/>}/>
      <Route path="/hufflepuff" element={<Hufflepuff/>}/>
      <Route path="/ravenclaw" element={<Ravenclaw/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
