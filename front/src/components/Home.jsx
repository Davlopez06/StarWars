import React from "react";
import Filter from "./Filter";
import css from "./Home.module.css"
import Navbar from "./Navbar";
import Tabla from "./Tabla";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/action";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Home=()=>{
    const dispatch=useDispatch()
    const person=useSelector(state=>state.person)
    const people=useSelector(state=>state.people)
    const allPeople=useSelector(state=>state.allPeople)
    const [page, setPages] = React.useState(1);
    const paginate=useSelector(state=>state.pages)
    const handleChange = (event, value) => {
        //Metodo para cambiar la pagina y la vista de la tabla
      setPages(value);
      console.log(value)
    };
    useEffect(()=>{
        //Metodo que va al actions y cambia la pagina de la tabla
        dispatch(setPage(page))
    },[page])
    useEffect(()=>{
        //Cuando se carga la pagina empezar en la pagina 1
        dispatch(setPage(1))
    },[])
    useEffect(()=>{
        setPages(1);
    },[allPeople])
    return (
        <div className={css.home}>
            <Navbar/> {//Muestra el titulo
            }
            <Filter/>{//Muestra la search bar y los filtros
            }
            <Tabla/> {//Muestra la tabla con sus personajes
            }
            {paginate ===1? null :people.length!==0 ?
                <Stack spacing={2} className={css.pagina}>
                    <Pagination count={paginate} page={page} onChange={handleChange} className={css.paginate}/>
                </Stack>
            : null}{//El paginado con el respectivo tamaño en base a los personajes
            }
                  <div className={css.box} id="m1-o">
                <div className={css.modalContainer}>
                    <div className={css.modal}>
                    <h1 className={css.modalTitle}>{person.name}</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={0}>                  
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Height:</h6>
                              <p className={css.modalText}>{person.height}</p>
                            </Grid> 
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Mass:</h6>
                              <p className={css.modalText}>{person.mass}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Hair_color:</h6>
                              <p className={css.modalText}>{person.hair_color}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Skin_color:</h6>
                              <p className={css.modalText}>{person.skin_color}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Eye_color:</h6>
                              <p className={css.modalText}>{person.eye_color}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Birth_year:</h6>
                              <p className={css.modalText}>{person.birth_year}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <h6 className={css.modalText}>Gender:</h6>
                              <p className={css.modalText}>{person.gender}</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <a href="#m1-c" className={css.link2}></a>
                    </div>
                </div>
                </div>
        </div> 
    )
}

export default Home;