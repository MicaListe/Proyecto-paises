import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getCountriesID } from "../../redux/actions"
import styles from "./detail.module.css"
import mancha from "../../assets/mancha2.jpg"
import avion from "./avion.png"
import hojas from "./hojas.png"
import maleta from "./maleta2.png"
import palmera from "./palmera.png"

export default function Detail(){

    const {id}= useParams()
    const country= useSelector((state)=> state.id)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getCountriesID(id))
    },[dispatch,id])

    return (
        <div className={styles.container} >
            {country.activities &&  (
               <div className={styles.card}>
                    <div  >
                        <img className={styles.img} src={country.flags} alt="Image not found"></img>
                    </div> 
                    <div  className={styles.background}>
                        <img className={styles.mancha} src={mancha}></img>
                    </div>
                    <div  className={styles.background1}>
                        <img className={styles.avion} src={avion}></img>
                    </div> 
                    <div  className={styles.background2}>
                        <img className={styles.hojas} src={hojas}></img>
                    </div> 
                    <div  className={styles.background3}>
                        <img className={styles.maleta} src={maleta}></img>
                    </div> 
                    <div  className={styles.background3}>
                        <img className={styles.palmera} src={palmera}></img>
                    </div>
                    <div className={styles.textTitle}> 
                        <h2>{country.name}</h2>
                    </div>
                    <div className={styles.textBody}>
                        <p><b>ID: </b>{country.id}</p>
                        <p><b>Name: </b>{country.name}</p>
                        <p><b>Continent: </b>{country.continents}</p>
                        <p><b>Capital: </b>{country.capital}</p>
                        <p><b>Area: </b>{country.area}</p>
                        <p><b>Population: </b>{country.population}</p>
                    </div>
                    <ul className={styles.cards}>
                        {country && (
                        <ul className={styles.actividades}>
                            {country.activities.map((activity) => (
                                <div>
                                    <h2 className={styles.nameAct}>Tourist activities</h2>
                                    <p><b>Name: </b>{activity.name}</p>
                                    <p><b>Difficulty: </b>{activity.difficulty}</p>
                                    <p><b>Duration: </b>{activity.duration}</p>
                                    <p><b>Season: </b>{activity.season}</p>
                                </div>    
                            ))}
                        </ul>
                        )}
                    </ul>
               </div> 
            )}
           
        </div>
    )
}