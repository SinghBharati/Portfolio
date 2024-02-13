import {useSelector} from "react-redux";

const Footer = () => {
    const theme = useSelector((store) => store.theme.isDarkTheme);

    return (
        <div className={`${theme ? "p-5 bg-gray-900 text-gray-200" : "p-5 bg-gray-200 text-gray-900"} flex justify-center`}>
            <h3 className="p-4 text-align-centre">No © copyright issues.  Made with ❤️ in India</h3>
        </div>
    );

}

export default Footer;