// const axios = require("axios");
// const { Country, Activity } = require("../db");

// const URL = "http://localhost:5000/countries";

// const allCountries = async (req, res) => {
//   try {
//     const response = await axios.get(URL);
//     if (response.status === 200) {
//       const paises = response.data;
//       countriesDt= paises.map((country)=>{
//         return{
//           id:country.cca3,
//           name:country.name.common ,
//           flags: country.flags.png,
//           continents: country.continents[0],
//           capital: country.capital?.[0] || "",
//           area: country.area,
//           population: country.population,
//           subregion: country.subregion  
//         }  
//       })   
            
//       for (const countryData of countriesDt) {
//         const { id,name, flags, capital, continents, area, population, subregion } = countryData;
        
//         await Country.findOrCreate({
//           where: { id }, // Condiciones de búsqueda
//           defaults: {
//           id,
//           name,
//           flags,
//           capital,
//           continents,
//           area,
//           population,
//           subregion,
//           }, // Valores a crear si no se encuentra el registro
//         });
//       }
//       // Responde con la lista de países obtenidos de la API
//       const h= await Country.findAll({
//         include:{
//           model:Activity,
//           attributes:["name","difficulty","duration","season"],
//           through:
//           {
//             attributes:[]
//           }
//         }
//       })
//       res.status(200).json(h)
//       return h  
//     };
//   }catch(error){
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// }

// module.exports = allCountries

const { Country, Activity } = require('../db');

const allCountries = async (req, res) => {
    try {
        let allCountries = await Country.findAll({
            include: Activity,
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
        allCountries = allCountries.map(country => country.get());
        return res.status(200).json(allCountries);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = allCountries;

