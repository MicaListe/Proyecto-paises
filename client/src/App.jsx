import './App.css'
import { useState } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Navbar from "../src/components/Nav/nav"
import Landing from "../src/components/Landing/landingPage"
import Detail from '../src/components/Detail/detail'
import axios from "axios"
import Countries from '../src/components/Countries/countries'
import Form from "../src/components/Form/form"

axios.defaults.baseURL = "https://proyecto-paises-production.up.railway.app/"

function App() {
  const [paises,setPaises]= useState([])
  const navigate= useNavigate()

  async function onSearch(name){
    try{
      const lowerCaseName= name.toLowerCase()
      const response= await axios.get(`/countries-name?name=${lowerCaseName}`)

      if(response.data.length >0){
        const countryName= response.data[0].name.toLowerCase()
        const countryExist= paises.some((pais)=> pais.name.toLowerCase()===countryName)
        if(response.data[0].id){
          navigate(`/detail/${response.data[0].id}`)
        }

        if(!countryExist){
          setPaises((p)=>[...p],{name:countryName})
        }
      }else{
        window.alert("El pais ingresado no existe")
      }
    }catch(error){
      window.alert("Ocurrió un error al buscar el país")
    }
  }

  const location= useLocation()
  return (
    <div className='App'>
      {location.pathname !== "/" &&  location.pathname !=="/form" && <Navbar onSearch={onSearch}/>}
      <Routes>
        <Route path= "/" element={<Landing/>}/>
        <Route path= "/detail/:id" element={<Detail/>}/>
        <Route path= "/form" element={<Form/>}/>
        <Route path= "/home" element={<Countries paises={paises}/>}/>
      </Routes>
    </div>
  )
}

export default App
