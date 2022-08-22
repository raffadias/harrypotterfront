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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/spells" element={<Spells/>}/>
      <Route path="/houses" element={<Houses/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
