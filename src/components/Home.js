import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function Home() {
    const theme = useSelector((store) => store.theme.
        isDarkTheme
    );
    console.log(theme)

    return (
        <div className={theme ? "p-5 bg-gray-900 text-gray-200" : "p-5 bg-gray-200 text-gray-900"}>
            <h1 className="text-3xl font-bold py-3">Hello, I am Bharati & WebDeveloper</h1>
            <p className="text-xl py-3">I design and build quality responsive website,clean user interface and rich interactive websites. <br/>
                Targeting JavaScript, React.js, Laravel and other web-development opportunities.</p>
            <br/>
            <p className="text-xl py-3">I'm open to learning, adapt to work with the team,freelance opportunities, jobs and use skills to solve <br/>
                complex UI Challenges and provide value to the growth of an organization.</p>
            <br/>
            <button
                className="text-xl p-3 my-4 rounded bg-gray-200 text-gray-900 font-bold"
            ><Link to="/about">View My Wor</Link>k</button>
        </div>
    );
}

export default Home;