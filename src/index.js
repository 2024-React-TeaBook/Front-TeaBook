import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './style.css'
import Nav from './component/nav/nav.js'
import Header from './component/header/header.js'

import Info from './component/info/Info'

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = (props) => {
    const [theme] = useState("romance");

    return (
        <div>
            <Nav />
            <Header />
            <Info themeStyle={theme} />
        </div>
    )
}
root.render(
    <Index/>
);