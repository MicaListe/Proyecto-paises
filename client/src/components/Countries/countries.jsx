import Country from "../Country/country"
import {useState, useEffect} from "react"
import Filtros from "../Filtros/Filter"
import styles from "./countries.module.css"
import {useDispatch,useSelector} from "react-redux"
import {getCountries, getActivities} from "../../redux/actions"


export default function Countries(){
    const [countryData, setCountryData]= useState([])
    const [page, setPage]= useState(1)
    const [activities, setActivities]=useState([])
    const allCountries= useSelector((state)=>state.filtered)
   
    const dispatch= useDispatch()
    const PaisesPorPag=10

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])

    const indexOfLastCountry= page * PaisesPorPag
    const indexOfFirstCountry= indexOfLastCountry - PaisesPorPag

    const current= allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
   
    //Cambiar a la siguiente pagina
    const siguiente=()=>{
        if(page <Math.ceil(countryData.length / PaisesPorPag)){
            setPage(page + 1)
        }
        setPage(page + 1)
    }

    //Cambiar a la pagina anterior
    const anterior=()=>{
        if(page >1){
            setPage(page - 1)
        }
    }

    return(
        <div className={styles.filtro}>
            <div className={styles.FlexContainer}>
                <Filtros activities={activities} setActivities={setActivities}></Filtros>
                {current.map((element) => (
                    <Country
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        flags={element.flags}
                        continents={element.continents}
                        capital={element.capital} 
                        subregion={element.subregion}
                        area={element.area}
                        population={element.population}
                            
                    />
                    
                ))}
            </div>
            <div>
                <button onClick={anterior} disabled={page===1}></button>
                <span className={styles.hola}>Page {page}</span>
                <button onClick={siguiente} disabled={page ===Math.ceil(countryData.length/PaisesPorPag)}></button>
            </div>
        </div>  
    )
}   




