import {useState, useEffect} from "react"
import { createActivity, getCountries } from "../../redux/actions"
import { useDispatch,useSelector } from "react-redux"
import styles from "./form.module.css"
import Validation from "./Validation"
import fotos from "./fotos.png"

export default function Form(){
    const dispatch= useDispatch()
    const initialForm={
        name:"",
        difficulty:0,
        duration:0.0,
        season:"",
        countries:[]
    }

    const [lugares, setLugares]= useState(initialForm)
    const [nombre,setNombre]= useState("")
    const ciudades= useSelector((state)=>state.filtered)
    const [errors, setErrors]= useState({})
  
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    function handleName(e){
        const inputValue= e.target.value;
        setNombre(inputValue)

        const validationErrors= Validation({...lugares,name:inputValue})
        setErrors(validationErrors)

        setLugares({
            ...lugares, name: nombre, [e.target.name]: e.target.value
        })
    }

    function handleSeason(e){
        const inputValue= e.target.value;
        setLugares({...lugares, season: inputValue})

        const validationErrors= Validation({...lugares, season:inputValue})
        setErrors(validationErrors)
    }

    function handleDuration(e){
        const inputValue= e.target.value;
        setLugares({...lugares, duration: parseFloat(inputValue)})

        const validationErrors= Validation({...lugares, duration:inputValue})
        setErrors(validationErrors)
    }

    function handleDifficulty(e){
        const inputValue= e.target.value;
        setLugares({...lugares, difficulty: parseInt(inputValue)})

        const validationErrors= Validation({...lugares, difficulty:inputValue})
        setErrors(validationErrors)
    }

    function handleSelect(e) {
        const valor = e.target.value
        const id = ciudades.find(e=> {
            if(e.name === valor){
                return e.id
            }
            
        })
        if(lugares.countries.includes(id.id)){
            alert('ya seleccionaste este País')
        }else{
            setLugares({
                ...lugares,
                countries: [...lugares.countries, id.name]
            })
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        dispatch(createActivity(lugares))
        window.alert("Actividad creada exitosamente")
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.tick}>TICKET!</h2>
                </div>
                <div className={styles.cardBody}></div>
                
                <div className={styles.form}>
                    <div className={styles.nombre}>
                        <label htmlFor="Nombre">Name: </label>
                        <input className={styles.input} placeholder="Name" type="text" name="name" value={nombre} onChange={handleName}></input>
                        <span className={styles.n}>{errors.name}</span> 
                    </div>
                    
                </div>

                <div className={styles.dificultad}>
                    <label htmlFor="Dificultad">Difficulty: </label>
                    <select className={styles.input} id="Temporada" onChange={handleDifficulty}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <span className={styles.n}>{errors.difficulty}</span>
                </div>

                <div className={styles.duracion}>
                    <label htmlFor="Duracion">Duration (hours): </label>
                    <input className={styles.input} placeholder="Duration" type="number" step= "0.1" name="duration" value={lugares.duration} onChange={handleDuration}></input>
                    <span className={styles.n}>{errors.duration}</span>
                </div>

                <div className={styles.temporada}>
                    <label htmlFor="Temporada">Season: </label>
                    <select className={styles.input} id="Temporada" onChange={handleSeason}>
                        <option value="Primavera">Spring</option>
                        <option value="Verano">Summer</option>
                        <option value="Otoño">Autumm</option>
                        <option value="Invierno">Winter</option>
                    </select>
                    <span className={styles.n}>{errors.season}</span>
                </div>
                <div className={styles.paises}>
                    <label htmlFor="seleccionar">Select country: </label>
                        <select className={styles.input} id="seleccionar" onChange={handleSelect} required>
                            {ciudades.map(e => (
                                <option key={e.name} value={e.name}>{e.name}</option>
                            ))}
                        </select>
                </div>
                <div>
                    <img className={styles.fotos} src={fotos}></img>
                </div>
                
                <button className={styles.boton} type="submit">Create</button>
                
            </div>
            
        </form>
    )
}