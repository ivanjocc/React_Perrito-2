//External import 
import { Link } from "react-router-dom";
//Internal 
// import { find } from "../controllers/users";
import { findAll } from '../controllers/users';


const Home = () => {
    // const users = find();
    const users = findAll();
    return (

        <div className="container">
            <div className="title-button">
                <h2>Utilisateurs</h2>
                <Link className="add-button" to='/add-user'>+</Link>
            </div>
            <ul className="menu">
                {
                    users.map(
                        user =>
                            <li className="menu-item" key={user.id}>
                                <Link className="link" to={`/users/${user.id}`}>{user.name}</Link>
                            </li>
                    )
                }
            </ul>
        </div>

    )
}

export default Home