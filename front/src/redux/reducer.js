import { GET_ALL_PEOPLE , SET_PAGE,FILTER,SEARCH, GET_PERSON} from "./action";

const initialState = {
    allPeople: [],
    auxPeople:[],
    people:[],
    person:{},
    pages: 0
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PEOPLE:
            //Obtiene todos los personajes que vienen del action
            console.log(action.payload)
            let paginate=0;
            let peopleIni=[];
            if(action.payload.length % 10===0){
                paginate=action.payload.length/10
            }else{
                paginate=Math.floor(action.payload.length/10)+1
            }
            for (let i = 0; i < 10; i++) {
                if(action.payload[i]){
                    peopleIni.push(action.payload[i])
                }
            }
            return{
                ...state,
                allPeople: action.payload,
                auxPeople: action.payload,
                people:peopleIni,
                pages: paginate
            }
        case SET_PAGE:
            console.log(action.payload)
            //Cambia la pagina que viene del action 
            let inicio=0;
            let peopleInitial=[];
            for (let i = ((action.payload-1)*10); i < (action.payload*10); i++) {
                if(state.allPeople[i]){
                    peopleInitial.push(state.allPeople[i])
                }
            }
            return{
                ...state,
                people:peopleInitial
            }
        case FILTER:
            //Se aplican los respecticos filtros de los que se seleccionan en 
            //los botones de la pagina
            console.log(action.payload)
            let peopleFilter=[]
            let peopleInitia=[];
            let pagina=0;
            if(action.payload==="All"){
                peopleFilter=state.auxPeople
            }else if(action.payload==="male"){
                peopleFilter=state.auxPeople.filter(people=>people.gender==="male")
                console.log(peopleFilter)
            }else if(action.payload==="female"){
                peopleFilter=state.auxPeople.filter(people=>people.gender==="female")
            }else if(action.payload==="A New Hope"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/1/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }else if(action.payload==="The Empire Strikes Back"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/2/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }else if(action.payload==="Return of the Jedi"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/3/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }else if(action.payload==="The Phantom Menace"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/4/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }else if(action.payload==="Attack of the Clones"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/5/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }else if(action.payload==="Revenge of the Sith"){
                function searchEpisode(elemento) {
                    for (let i = 0; i < elemento.films.length; i++) {
                        if (elemento.films[i]==="https://swapi.dev/api/films/6/"){
                            return elemento
                        }
                    }
                  }
                peopleFilter=state.auxPeople.filter(searchEpisode)
            }

            //Una vez se filtran los personajes si calculan cuantas paginas va a tener 
            //la tabla con los personajes filtrados
            for (let i = 0; i < 10; i++) {
                if(peopleFilter[i]){
                    peopleInitia.push(peopleFilter[i])
                }
            }
            if(peopleFilter.length % 10===0){
                pagina=peopleFilter.length/10
            }else{
                pagina=Math.floor(peopleFilter.length/10)+1
            }
            return{
                ...state,
                people:peopleInitia,
                allPeople: peopleFilter,
                pages: pagina
            }
            case SEARCH:
                console.log(action.payload)
                //Se busca los personajes que conten las palabras que se ingresan en la search bar
                let searchPeolpe=state.auxPeople.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
                console.log(searchPeolpe)
                let peopleInitiaa=[];
                let pagin=0;
                //Se separan los primeros 10 de la tabla y se calculan las paginas
                for (let i = 0; i < 10; i++) {
                    if(searchPeolpe[i]){
                        peopleInitiaa.push(searchPeolpe[i])
                    }
                }
                if(searchPeolpe.length % 10===0){
                    pagin=searchPeolpe.length/10
                }else{
                    pagin=Math.floor(searchPeolpe.length/10)+1
                }
                return{
                    ...state,
                    people:peopleInitiaa,
                    allPeople: searchPeolpe,
                    pages: pagin
                }
        case GET_PERSON:
            console.log(action.payload)
            //Se busca el personaje y toda su informacion con el nombre
            let getPerson=state.auxPeople.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
            console.log(getPerson)
            return{
                ...state,
                person:getPerson[0],
 
            }
        default: return state
    }
};
  
export default rootReducer;