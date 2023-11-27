import { GET_ACTIVITIES, GET_COUNTRIES,COUNTRY_ID, FILTER_ACTIVITIES,FILTER_CONTINENT,ORDER_BYNAME,ORDER_POPULATION, CREATE_ACTIVITY, CLEAR_COUNTRIES } from "./actions";

const initialState={
    filtered:[],
    countriess:[],
    actividad:[],
    allActividades:[],
    id:[]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countriess: action.payload,
                filtered: action.payload,
              
            }
        case CLEAR_COUNTRIES:
            return{
                ...state, filtered:[]
            }

        case COUNTRY_ID:
            return{
                ...state,
                id: action.payload
            }
            
        case GET_ACTIVITIES:
            console.log("state",state.id)
            return{
                ...state,
                actividad: action.payload,
                allActividades: action.payload
            }
            
        case FILTER_ACTIVITIES:
            
            const { act} = action.payload; 
            if (act === "All") {
                return {
                    ...state,
                    countriess: state.allContinents, 
                };
            }
  
            return{
                ...state,
                filtered:state.countriess.filter(
                (country) => {
                    const activities = country.activities || [];
                    return activities.some(
                        (activity) =>
                        activity.name.toLowerCase() === act.toLowerCase()
                    );
                }
                )
            }  
   
            
             
        case FILTER_CONTINENT:
            const filter= state.countriess.filter((c)=>c.continents=== action.payload)
            return{
                ...state, 
                filtered: filter
            }

        case ORDER_BYNAME:
            let orderCountries
            if(action.payload === "Descendente"){
                orderCountries=[...state.filtered].sort((a,b)=> b.name.localeCompare(a.name))
            }else{
                orderCountries=[...state.filtered].sort((a,b)=> a.name.localeCompare(b.name))
            }
            return{
                ...state, filtered: orderCountries
            }

        case ORDER_POPULATION:
            let ordenPaises
            if(action.payload === "Ascendente"){
                ordenPaises=[...state.filtered].sort((a,b)=> b.population -a.population)
            }else{
                ordenPaises=[...state.filtered].sort((a,b)=> a.population - b.population)
            }
            return{
                ...state, filtered: ordenPaises
            }

        case CREATE_ACTIVITY:
            return {
                ...state
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer


