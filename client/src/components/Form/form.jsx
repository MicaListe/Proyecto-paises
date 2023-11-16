import {useState, useEffect} from "react"
import { createActivity, getCountries } from "../../redux/actions"
import { useDispatch,useSelector } from "react-redux"
import styles from "./form.module.css"
// import Filtros from "../Filtros/Filter"
import Validation from "./Validation"

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
    console.log("lug", lugares)

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
            <div>
                <label htmlFor="Nombre">Name</label>
                <input placeholder="Name" type="text" name="name" value={nombre} onChange={handleName}></input>
                <span>{errors.name}</span>
            </div>

            <div>
                <label htmlFor="Dificultad">Difficulty</label>
                <select id="Temporada" onChange={handleDifficulty}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <span>{errors.difficulty}</span>
            </div>

            <div>
                <label htmlFor="Duracion">Duration in hours</label>
                <input placeholder="Duration" type="number" step= "0.1" name="duration" value={lugares.duration} onChange={handleDuration}></input>
                <span>{errors.duration}</span>
            </div>

            <div>
                <label htmlFor="Temporada">Season</label>
                 <select id="Temporada" onChange={handleSeason}>
                    <option value="Primavera">Spring</option>
                    <option value="Verano">Summer</option>
                    <option value="Otoño">Autumm</option>
                    <option value="Invierno">Winter</option>
                </select>
                <span>{errors.season}</span>
            </div>
            <div>
                 <label htmlFor="seleccionar">Select country</label>
                    <select id="seleccionar" onChange={handleSelect} required>
                        {ciudades.map(e => (
                            <option key={e.name} value={e.name}>{e.name}</option>
                        ))}
                    </select>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}