import React, { useState } from "react";
import './select.css'

const Select = function () {
    return (<div>
        <div className="select-div">
            <div className="select-title">
                <div className="line-div" id="line-div-1"></div>
                <div className="select-title-text">
                    <h4 className="select-eng-text">Select Genre</h4>
                    <h1 className="select-han-text">장르를 골라보세요</h1>
                </div>
                <div className="line-div" id="line-div-2"></div>
            </div>


            <div className="select-genre-div">
                <div className="genre-div">
                    <div className="genre-div-1 genre-romance-1" style={{
                        background: "url('img/select/genre-romance.png') no-repeat center",
                        backgroundSize: "cover"
                    }}></div>
                    <div className="genre-div-2 genre-romance-2"></div>
                </div>
                
                <div className="genre-div">
                    <div className="genre-div-1 genre-horror-1" style={{
                        background: "url('img/select/genre-horror.png') no-repeat center",
                        backgroundSize: "cover"
                    }}></div>
                    <div className="genre-div-2 genre-horror-2"></div>
                </div>

                <div className="genre-div">
                    <div className="genre-div-1 genre-sf-1" style={{
                        background: "url('img/select/genre-sf.png') no-repeat center",
                        backgroundSize: "cover"
                    }}></div>
                    <div className="genre-div-2 genre-sf-2"></div>
                </div>
            </div>
        </div>
    </div>)
}

export default Select;