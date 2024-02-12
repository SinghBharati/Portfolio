import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-gray-900">
            <ul className="p-4 flex justify-end">
                <li className="p-3 rounded-2xl  text-gray-200 hover:text-gray-500 hover:cursor-pointer"><Link to="/">Home</Link></li>
                <li className="p-3 rounded-2xl  text-gray-200 hover:text-gray-500 hover:cursor-pointer"><Link to="/about">About Me</Link></li>
                <li className="p-3 rounded-2xl  text-gray-200 hover:text-gray-500 hover:cursor-pointer"><Link to="/contact">Contact Me</Link></li>
            </ul>
        </div>
    )

}

export default Header;