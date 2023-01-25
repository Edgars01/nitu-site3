import { Link } from "react-router-dom";
import '../component-style/Navbar.css';

const NavBarLink = ({url, onClick, title}) => {
    
    return (
        <li className='nav-item'>
            <Link to={url} className='nav-links' onClick={() => onClick()}>
                {title}
            </Link>
        </li>
    )
}

export default NavBarLink;