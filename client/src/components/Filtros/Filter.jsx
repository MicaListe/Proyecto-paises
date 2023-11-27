import React, {useState, useEffect} from "react";
import { filter_continent, filter_activities, getActivities, order_name,order_population,getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./filter.module.css"


export default function Filtros({page, setPage}){
    const dispatch= useDispatch()
    const [selectedCountry, setSelectedCountry]= useState([])
    const activity= useSelector((state)=>state.actividad)

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[dispatch])

    const handleActChange= async(e)=>{
        try{
            await dispatch(filter_activities(e.target.value))
            setPage(1)
          
        }catch(error){
            console.error(error)
        }
        
    }

    const handleContinentChange= async(continent)=>{
        setSelectedCountry(continent)
        try{
            await dispatch(filter_continent(continent))
        }catch(error){
            console.error(error)
        }
    }

    const handleOrderCountries= async(event)=>{
        dispatch(order_name(event.target.value))
    }

    const handleOrderPopulation= async(event)=>{
        dispatch(order_population(event.target.value))
    }
    
    return(
        <div className={styles.filtro}>
            <div className={styles.filtrar}>
                <label className={styles.sub}> Filtrar por actividad:</label>
                <select  onChange={(e) => {
                handleActChange(e);
                }}>
                    <option value="all">Activities</option>
                    {activity.map((activ,index)=>(
                        <option key={index} value={activ.name}>{activ.name}</option>  
                    ))}
                </select> 
            </div>
            <div>
                <label className={styles.subti}>Continent:</label>
                <select value={selectedCountry} onChange={(e)=> handleContinentChange(e.target.value)}>
                    <option value= "Africa">Africa</option>
                    <option value= "South America">South America</option>
                    <option value= "North America">North America</option>
                    <option value= "Antarctica">Antarctica</option>
                    <option value= "Asia">Asia</option>
                    <option value= "Europe">Europe</option>
                    <option value= "Oceania">Oceania</option>
                </select>
            </div>

            <div className={styles.filtrar}>
                <label className={styles.subtitulo} htmlFor="ordenAlfabetico">Alphabet:</label>
                <select  id="ordenAlfabetico" onChange={e=> handleOrderCountries(e)}>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
            <div className={styles.filtrar}>
                <label className={styles.subt} htmlFor="cantidadPoblacion">Population:</label>
                <select className={styles.pop}id="cantidadPoblacion" onChange={e=>handleOrderPopulation(e)}>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
        </div>
        
    )
}


