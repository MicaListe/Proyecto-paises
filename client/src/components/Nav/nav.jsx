import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
import styles from "./nav.module.css"

export default function Navbar({onSearch}){
    return(
        <div className={styles.menu}>
            <nav>
                <SearchBar onSearch={onSearch}/>
                <ul>
                    <button className={styles.botonHome}>
                        <Link to="/home">Home</Link>
                    </button>
                </ul>
                <ul>
                    <button className={styles.botonForm}>
                        <Link to="/form">Create Activity</Link>
                    </button>
                </ul>

            </nav>
        </div>
    )
}