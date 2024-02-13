import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Card = ({image, title, description, height, width, to}) => {
    const theme = useSelector((store) => store.theme.isDarkTheme);

    return (
        <div className={`p-4 m-auto  my-4  h-auto w-${width} ${theme ? "bg-gray-200 text-gray-900" : "bg-gray-900 text-gray-200"}  rounded`}>
            <div className={`${theme ? "bg-gray-900" : "bg-gray-200 "}  rounded flex justify-center bg-cover`}>
                <Link to={to}>
                    <img
                        className={`p-2 h-${height} w-${height} bg-cover`}
                        src={image} alt="Image"
                    />
                </Link>
            </div>
            <h3 className=" font-bold text-2xl">{title}</h3>
            <h4 className="">{description}</h4>
        </div>
    );
}

export default Card;