import {Link} from "react-router-dom"
import styles from "./country.module.css"

export default function Country({id,name,flags,continents}){

    return (
        <div className={styles.card}>
            <div>
                <Link to={`/detail/${id}`}><h1 className={styles.name}>{name}</h1></Link>
                <h2 className={styles.h2}>{continents}</h2>
            </div>
            <div>
                <img className={styles.img} src={flags} alt={`No se encuentra la imagen de ${name}`} />
            </div>  
        </div> 
    )

}


