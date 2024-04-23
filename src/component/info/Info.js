import './info.css'

function InfoContainer({ classNameItem, themeStyle }) {
    const imgSrc = `${process.env.PUBLIC_URL}/img/info/${themeStyle}`;
    return (
        <div className={`${classNameItem} info-container`}>
            <img src={`${imgSrc}-1.png`} alt='bgimg'/>
        </div>
    )
    
}

const Info = ({themeStyle}) => {
    return (
        <div className="top">
            <div>
                <InfoContainer classNameItem={"left"} themeStyle={themeStyle}/>
                {/* <InfoContainer classNameItem={"right"} themeName={theme}/> */}
            </div>
        </div>
    )
}

export default Info;