import {useState} from "react"
import styles from "./SearchBar.module.css"


export default function SearchBar({onSearch}){
   const [name,setName]= useState("")
    const handleChange=(event)=>{
        let value= event.target.value //Captura el valor ingresado por value
        setName(value) //lo actualiza al estado
    }

    return(
        <div className={styles.container}>
            <input className={styles.input} placeholder="Enter your country" onChange={handleChange} type="search" value={name}></input>
            <button className={styles.btn} onClick={()=>onSearch(name)}>Search</button>
        </div>
    )
}