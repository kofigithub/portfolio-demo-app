import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import "./components/indexList.css";
import Footer from "./components/Footer";
import reportWebVitals from "./components/reportWebVitals";
import ImgCarousel from "./components/ImgCarousel";
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';


// styles
import './App.css';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
  <div align="center"><ImgCarousel/></div>
    <BrowserRouter>
	<div className="nav-area">
        <Link to="/" className="logo">         
        </Link>
        <Navbar /></div>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

