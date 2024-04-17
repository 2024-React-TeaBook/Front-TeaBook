// Nav.js
import React from "react";
import logo from './img/logo.png';
import toggle1 from './img/toggle-stop.png';
import toggle2 from './img/toggle-play.png';
import useImageToggle from "./Toggler";
import './nav.css'

const Nav = function (props) {
    const [currentImage, toggleImage] = useImageToggle(toggle1, toggle2);

    return (
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
                            onClick={toggleImage}
                            alt={currentImage === toggle1 ? "stop" : "play"}
                        />
                        <div className="music-player-bar"></div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
