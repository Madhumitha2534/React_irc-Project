import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (<nav>
        <ul>
            <li className="active">
                <Link to="/login" className="Login">Login</Link>
            </li>
            {/* <li className="active"> */}
                {/* <Link to="/register" className="Register">Register</Link> */}
            {/* </li> */}
            {/* <li className="active"> */}
                {/* <Link to="/category" className="Category">Catogory</Link> */}
            {/* </li> */}
            <h1>Welcome To Food Portal!!!</h1>
        </ul>
    </nav>
    )
}
export default Home;