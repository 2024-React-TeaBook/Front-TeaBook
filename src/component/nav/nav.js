// Nav.js
import React, { useState } from "react";
import logo from './img/logo.png';
import toggle1 from './img/toggle-stop.png';
import toggle2 from './img/toggle-play.png';
import useImageToggle from "./Toggler";
import { playMusic, stopMusic, setMusicTime } from "./musicController";
import './nav.css';

const Nav = function () {
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
        <div className="top">
            <nav>
                <img src={logo} className='Header-logo' alt="logo" />
                <ul className="menu-ul">
                    <li className={"li-text"}>사이트 소개</li>
                    <li className={"li-text"}>장르 선택</li>
                    <li>
                        <div className="music-player-div">
                            <img
                                src={currentImage}
                                className='player-toggle'
                                onClick={handleToggle}
                                alt={isPlaying ? "stop" : "play"}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={currentTime}
                                onChange={handleTimeChange}
                                className="music-player-bar"
                            />
                        </div>
                    </li>
                </ul>
                <div className="test"></div>
            </nav>
        </div>
    );
}

export default Nav;
