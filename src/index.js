import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './style.css'
import Nav from './component/nav/nav.js'
import Header from './component/header/header.js'
import Info from './component/info/Info.js'
import Select from './component/select/Select'
import Footer from './component/footer/footer.js'
import Main from './component/main/main.js'

// audio
import useImageToggle from "./audio/Toggler.js";
import { playMusic, stopMusic, setMusicTime } from "./audio/musicController.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = (props) => {
    const [theme, setTheme] = useState("romance");

    const toggle1 = `${process.env.PUBLIC_URL}/img/nav/toggle-stop.png`;
    const toggle2 = `${process.env.PUBLIC_URL}/img/nav/toggle-play.png`;

    const [currentImage, toggleImage] = useImageToggle(toggle1, toggle2);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);


    const handleToggle = () => {
        toggleImage();
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            stopMusic();
        } else {
            playMusic("audio/main.mp3");
        }
    };

    const handleTimeChange = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
        setMusicTime(newTime);
    };

    return (
        <BrowserRouter>
        <div>
            <Nav currentImage={currentImage} currentTime={currentTime} isPlaying={isPlaying} handleToggle={handleToggle} handleTimeChange={handleTimeChange}/>
            <Header />
            <Info themeStyle={theme} />
            <Select setTheme={setTheme} />
            <Main themeStyle={theme} currentImage={currentImage} handleToggle={handleToggle} isPlaying={isPlaying}/>
            <Footer />
        </div>
        </BrowserRouter>
    )
}
root.render(
    <Index />
);