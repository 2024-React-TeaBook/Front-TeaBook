import './info.css'
import InfoContainer from './infocontainer';
import Circle from './circle';


const Info = ({ themeStyle }) => {

    return (
        <div className="top">
            <div className='info'>
                <InfoContainer classNameItem={"left"} themeStyle={themeStyle} />
                <InfoContainer classNameItem={"right"} themeStyle={themeStyle} />
                <Circle />
            </div>
        </div>
    )

}

export default Info;