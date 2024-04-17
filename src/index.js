import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Nav from  './component/nav/Nav'
import Header from './component/header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Nav />
        <Header />
    </div>
);