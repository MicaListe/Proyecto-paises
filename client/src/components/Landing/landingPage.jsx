import {Link} from "react-router-dom"
// import ruta from "../../assets/ruta_aviones.png"
// import ruta from "../../assets/otra.png"
import ruta from "../../assets/otra2.png"
import styles from "./landingPage.module.css"
import nube from "../../assets/mancha2.jpg"
import nube2 from "../../assets/mancha2.jpg"
import nube3 from "../../assets/mancha2.jpg"


export default function Landing(){
    return(
        <div className={styles.paises}> 
           
            <div>
                <h1 className={styles.titulo}>TIME TO TRAVEL!</h1>
                <h2 className={styles.explicacion}>Get to know all the countries and create a tourist activity!</h2>
            </div> 
            <div className={styles.marco}>
                <img className={styles.img} src={ruta} alt="paises"></img>
            </div>
            <div className={styles.marco}>
                <img className={styles.image} src={nube} alt="paises"></img>
            </div>
            <div className={styles.marco}>
                <img className={styles.im} src={nube2} alt="paises"></img>
            </div>
            <div className={styles.marco}>
                <img className={styles.ima} src={nube3} alt="paises"></img>
            </div>
           
            <button className={styles.boton}>
                <Link to={"/home"}> Sign In</Link>
            </button>
        </div>
    )
}