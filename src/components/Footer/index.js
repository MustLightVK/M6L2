import Data from "../Data"
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <Data {...props} />
        </div>
    );
}

export default Footer;
