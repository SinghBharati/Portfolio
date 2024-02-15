import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../utils/themeSlice";
import {useState} from "react";
const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.isDarkTheme);
    const [isDarkMode, setIsDarkMode] = useState(theme);

    const changeTheme = (value) => {
        dispatch(setTheme(value))
        setIsDarkMode(value)
    }

    return (
        <div className={`${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-200 text-gray-900"} fixed w-full z-10`}>
            <ul className="p-4 flex justify-end">
                <li className={"p-3 rounded-2xl hover:text-gray-500 hover:cursor-pointer"}><Link to="/">Home</Link></li>
                <li className="p-3 rounded-2xl hover:text-gray-500 hover:cursor-pointer"><Link to="/about">About</Link></li>
                <li className="p-3 rounded-2xl hover:text-gray-500 hover:cursor-pointer"><Link to="/contact">Contact</Link></li>
                <li className="p-3 rounded-2xl  text-gray-200 hover:text-gray-500 hover:cursor-pointer">
                    <button
                        className={`${isDarkMode ? "bg-gray-200 text-gray-900" : "bg-gray-900 text-gray-200"}  text-xl p-1 -my-1 rounded font-bold`}
                        onClick={() => changeTheme(!theme)}
                    >{isDarkMode ? ("Light Mode") : ("Dark Mode")}
                    </button>
                </li>
            </ul>
        </div>
    )

}

export default Header;