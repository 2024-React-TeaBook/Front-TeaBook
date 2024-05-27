import React, { useState, useEffect } from "react";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = (props) => {
    const [theme, setTheme] = useState("romance");

    const toggle1 = `${process.env.PUBLIC_URL}/img/nav/toggle-stop.png`;
    const toggle2 = `${process.env.PUBLIC_URL}/img/nav/toggle-play.png`;

    const [currentImage, toggleImage] = useImageToggle(toggle1, toggle2);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = document.getElementById('audio-element');

        const handleTimeUpdate = () => {
            if (audio) {
                setCurrentTime(audio.currentTime);
            }
        };

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    const handleToggle = () => {
        const audio = document.getElementById('audio-element');
        toggleImage();
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    const handleTimeChange = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
        const audio = document.getElementById('audio-element');
        if (audio) {
            audio.currentTime = newTime;
        }
    };

    return (
        <BrowserRouter>
            <div>
                <audio id="audio-element" src="audio/main.mp3"></audio>
                <Nav
                    currentImage={currentImage}
                    currentTime={currentTime}
                    isPlaying={isPlaying}
                    handleToggle={handleToggle}
                    handleTimeChange={handleTimeChange}
                />
                <Header />
                <Info themeStyle={theme} />
                <Select setTheme={setTheme} />
                <Main themeStyle={theme} currentImage={currentImage} handleToggle={handleToggle} isPlaying={isPlaying} />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

root.render(
    <Index />
);
