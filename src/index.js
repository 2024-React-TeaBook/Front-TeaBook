import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './style.css';
import Nav from  './component/nav/Nav'
import './component/nav/nav.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Nav/>
    </div>
);

// import './component/nav/use-effect-unmount'