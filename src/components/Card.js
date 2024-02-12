import {Link} from "react-router-dom";

const Card = ({image, title, description, height, width, to}) => {
    return (
        <div className={`p-4 m-auto my-4 h-auto w-${width} bg-gray-200 text-gray-200 rounded`}>
            <div className="bg-gray-900 rounded flex justify-center bg-cover">
                <Link to={to}>
                    <img
                        className={`p-2 h-${height} bg-cover`}
                        src={image} alt="Image"
                    />
                </Link>
            </div>
            <h3 className="text-gray-900 font-bold text-2xl">{title}</h3>
            <h4 className="text-gray-900">{description}</h4>
        </div>
    );
}

export default Card;