// Nav.js
import React from "react";
import './nav.css';

const Nav = function ({currentImage, currentTime, isPlaying, handleToggle, handleTimeChange}) {
    
    return (
        <div className="top">
            <nav>
                <img src={`${process.env.PUBLIC_URL}/img/logo/logo-white.png`} className='Header-logo' alt="logo" />
                <ul className="menu-ul">
                    <li className={"li-text"} onClick={()=> {
                        document.getElementById("info_").scrollIntoView({ behavior: "smooth" })
                    }}>사이트 소개</li>
                    <li className={"li-text"} onClick={()=> {
                        document.getElementById("select_").scrollIntoView({ behavior: "smooth" })
                    }}>장르 선택</li>
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
