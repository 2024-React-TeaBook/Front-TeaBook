import React, { useEffect } from 'react'

const Circle = () => {
    useEffect(()=>{
        const text = document.querySelector(".text");
        const textContent = text.innerText.trim();
        const radius = 300;
        
        text.innerHTML = textContent
            .split("")
            .map((char, i) => {
                const angle = (360 / textContent.length) * i;
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
                return `<span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg);">${char}</span>`;
            })
            .join("");
        
    }, [])

    return (
        <div className="circle">
            <div className="logo"></div>
            <div className="text">
                Tea And Book And
            </div>
        </div>
    )
}

export default Circle;