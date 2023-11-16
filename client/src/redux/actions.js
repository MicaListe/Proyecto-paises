import axios from "axios"
export const GET_COUNTRIES= "GET_COUNTRIES"
export const COUNTRY_ID="COUNTRY_ID"
export const FILTER_CONTINENT= "FILTER_CONTINENT"
export const FILTER_ACTIVITIES= "FILTER_ACTIVITIES"
export const GET_ACTIVITIES= "GET_ACTIVITIES"
export const ORDER_BYNAME= "ORDER_BYNAME"
export const ORDER_POPULATION= "ORDER_POPULATION"
export const CREATE_ACTIVITY= "CREATE_ACTIVITY"

export function getCountries(){
    return async function (dispatch){
        let json= await axios ("http://localhost:3001/countries")
        return dispatch({
            type: "GET_COUNTRIES",
            payload: json.data
        })
    }
}

// export function getCountriesID(id){
//     return async function(dispatch){
//         let json= await axios(`http://localhost:3001/countries/${id}`)
//         console.log("json",json)
//         return dispatch({
//             type: "COUNTRY_ID",
//             payload: json.data
//         })
//     }
// }
export function getCountriesID(id){
    return async function(dispatch){
        let json= await axios(`http://localhost:3001/countries/${id}`)
        console.log("josn", json)
        return dispatch({
            type: COUNTRY_ID, 
            payload: json.data
        })
    }
}

export const filter_continent=(continents)=>{
    return{
        type: FILTER_CONTINENT,
        payload: continents
    }
}
export const filter_activities=(act)=>{
    return{
        type: FILTER_ACTIVITIES,
        payload: {act}
    }
}

export function getActivities(){
    return async function(dispatch){
        try{
            const act= await axios.get(`http://localhost:3001/activities-activity`)
            return dispatch({
                type: GET_ACTIVITIES,
                payload: act.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const order_name=(name)=>{
    return {
        type: ORDER_BYNAME,
        payload: name
    }
}

export const order_population=(population)=>{
    return{
        type: ORDER_POPULATION,
        payload: population
    }
}

export const createActivity=(lugares)=>{
    return async function(){
        const json= await axios.post("http://localhost:3001/activities", lugares)
        return json
    }  
}
