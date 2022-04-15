import '../assets/css/Header.css';
import Logo from '../assets/imgs/logo.png';

function Header() {
    return (
        <div className="head">
            <div>
                <div className="logo">
                    <img src={Logo} alt="logo" size="200" height="200" className="logo"></img>
                </div>
                <h1 className="title">MontyHacks V</h1>
                <br />
                <h3 className="hackathon-date">June 11th</h3>
            </div>
        </div>
    )
}

export default Header;