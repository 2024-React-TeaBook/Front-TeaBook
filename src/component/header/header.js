import ReactDOM from "react-dom";
import logo from './img/logo.png';
const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = function(props) {
    return (
        <div>
            <header>
                <img src={logo} className='Header-logo'/>
            </header>
        </div>
    )
}

export default Header;