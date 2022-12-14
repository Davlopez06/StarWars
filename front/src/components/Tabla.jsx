import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllPeople, getPerson, setPage } from "../redux/action";
import css from "./Tabla.module.css";

const Tabla=()=>{
    const people=useSelector(state=>state.people)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllPeople())
        dispatch(setPage(1))
    },[])
    // Al entrar a este metodo se busca en personaje en especifico enviando
    // el nombre y asi obtener la informacion detallada
    const onClickDetail=(name)=>{
        dispatch(getPerson(name))
    }
    if(people.length===0){
        return(
            <div className={css.nofound}>
                <h2 className={css.message}>No found</h2>
            </div>
        )
    }else if(people){
        return (
            <div class={css.container}>
                {// Tabla de los personajes
                }
                <ul className={css.responsiveTable}>
                    <li className={css.tableHeader}>
                    <div className={css.col} {...css.col1}>Name</div>
                    <div className={css.col} {...css.col2}>Gender</div>
                    <div className={css.col} {...css.col3}>Height</div>
                    <div className={css.col} {...css.col4}>More information</div>
                    </li>
                    {people?.map((people)=>{
                        //Map que genera cada fila de la tabla con su personaje
                        return(
                            <li className={css.tableRow}>
                                <div className={css.col} {...css.col1} data-label="Name">{people.name}</div>
                                <div className={css.col} {...css.col2} data-label="Gender">{people.gender}</div>
                                <div className={css.col} {...css.col3} data-label="Height">{people.height}</div>
                                <div className={css.col} {...css.col4} data-label="More information"><a href="#m1-o" className={css.link1} id="m1-c" onClick={()=>onClickDetail(people.name)}>Detail</a></div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Tabla