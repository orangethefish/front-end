import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NavBar />
        <HomePage />
    </div>
);