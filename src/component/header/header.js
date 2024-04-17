import Share from './Share'
import './header.css'

const Header = () => {
    return (
        <header style={
            { background: "url('img/header/background.png') no-repeat center", 
              backgroundSize: "cover" }}>
            <div className="figure"></div>
            <div className="title-container">
                <div className="title">책과 차의 만남이 이루어지다, 다독</div>
                <div className="sub-title">A meeting of Books and Teas</div>
            </div>
            <Share />
        </header>
    )
}

export default Header;