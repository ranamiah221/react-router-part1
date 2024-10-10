import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div className="text-xl font-bold text-blue-500">
            <nav>
           
            <NavLink className="mr-2" to={'/'}>Home</NavLink>
            <NavLink className="mr-2" to={'/about'}>About</NavLink>
            <NavLink className="mr-2" to={'/contract'}>Contract</NavLink>
            <NavLink className="mr-2" to={'/users'}>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;