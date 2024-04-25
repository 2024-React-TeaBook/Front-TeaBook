const InfoContainer = ({ classNameItem, themeStyle }) => {
    const imgSrc = `${process.env.PUBLIC_URL}/img/info/${themeStyle}-${classNameItem}.png`;
    return (
        <div className={`${classNameItem} info-container`}>
            {classNameItem==="right" ? 
                <div>다독은 책에 어울리는 차를<br></br>
                추천해주는 사이트입니다.</div> : false}
            <img src={`${imgSrc}`} alt='bgimg'/>
            {classNameItem==="left" ? 
                <div>장르를 하나 선택하면<br></br>
                그 장르에 해당하는 책,<br></br>
                그리고 그 책들과<br></br>
                잘 어울리는 차를 추천해줍니다.</div> : false}
        </div>
    )
    
}

export default InfoContainer;