import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="text-xl font-bold text-blue-500">
            <Link className="mr-2" to="/">Home</Link>
            <Link className="mr-2" to="/about">About</Link>
            <Link className="mr-2" to="/contract">Contract</Link>
            <Link className="mr-2" to="/users">Users</Link>
        </div>
    );
};

export default Header;