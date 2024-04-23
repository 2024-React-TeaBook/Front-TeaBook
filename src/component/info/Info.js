import './info.css'

function InfoContainer({ classNameItem, themeStyle }) {
    const imgSrc = `${process.env.PUBLIC_URL}/img/info/${themeStyle}-${classNameItem}.png`;
    return (
        <div className={`${classNameItem} info-container`}>
            <img src={`${imgSrc}`} alt='bgimg'/>
        </div>
    )
    
}

const Info = ({themeStyle}) => {
    return (
        <div className="top">
            <div>
                <InfoContainer classNameItem={"left"} themeStyle={themeStyle}/>
                <InfoContainer classNameItem={"right"} themeStyle={themeStyle}/>
            </div>
        </div>
    )
}

export default Info;