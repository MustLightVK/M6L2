import Bio from '../Bio';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <Bio name={props.name} lastName={props.lastName} />
        </div>
    )
}

export default Header;

