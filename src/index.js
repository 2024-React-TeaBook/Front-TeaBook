import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './style.css'
import Nav from './component/nav/nav.js'
import Header from './component/header/header.js'
import Info from './component/info/info.js'
import Select from './component/select/Select'
import Footer from './component/footer/footer.js'
import Main from './component/main/main.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = (props) => {
    const [theme, setTheme] = useState("romance");

    return (
        <div>
            <Nav />
            <Header />
            <Info themeStyle={theme} />
            <Select />
            <Main themeStyle={theme} />
            <Footer />
        </div>
    )
}
root.render(
    <Index />
);