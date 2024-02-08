import SearchBar from "../searchBar/searchBar";
import {Link} from "react-router-dom"
import styles from "./nav.module.css"
import { clearCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Navbar({onSearch}){

    const dispatch=useDispatch()

    const handleClick=()=>{
        dispatch(clearCountries())
    }

    return(
        <div className={styles.menu}>
            <nav>
                <SearchBar onSearch={onSearch}/>
                <ul>
                    <button className={styles.botonForm}>
                        <Link to="/form">Create Activity</Link>
                    </button>
                </ul>
                <ul>
                    <button className={styles.botonHome}>
                        <Link to="/home">Home</Link>
                    </button>
                </ul>
                <ul>
                    <button className={styles.botonSalir}>
                        <Link to="/">Log out</Link>
                    </button>
                </ul>

            </nav>
        </div>
    )
}