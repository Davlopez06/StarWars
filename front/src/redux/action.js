import axios from "axios"
export const GET_ALL_PEOPLE="GET_ALL_PEOPLE"
export const SET_PAGE="SET_PAGE"
export const FILTER="FILTER"
export const SEARCH="SEARCH"
export const GET_PERSON="GET_PERSON"

export const getAllPeople = () => async(dispatch) => {
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    let people=[]
    for (let i = 1; i <=9; i++){
        const data=await axios.get(`https://swapi.dev/api/people/?page=${i}`) 
        console.log(data)
        const peoplee=data.data.results
        people=people.concat(peoplee);
    }
    console.log(people)
    return dispatch({type: GET_ALL_PEOPLE, payload: people})
}

export const setPage= (page)=>(dispatch)=>{
    //Cambia la pagina de la tabla
    return dispatch({type: SET_PAGE, payload: page})
}

export const filter=(type)=>(dispatch)=>{
    //Aplica los filtros
    return dispatch({type: FILTER, payload: type})
}

export const search=(name)=>(dispatch)=>{
    return dispatch({type: SEARCH, payload: name})
}

export const getPerson=(name)=>(dispatch)=>{
    return dispatch({type: GET_PERSON, payload: name})
}