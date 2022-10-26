import React from "react";
import { useDispatch } from "react-redux";
import { filter, search } from "../redux/action";
import css from "./Filter.module.css"

const Filter=()=>{
    const dispatch=useDispatch();
    const onChangeSearch=(e)=>{
       dispatch(search(e.target.value))
    }
    return (
        <div className={css.filter}>
            <div className={css.searchbar}>
                {// Search bar para buscar personajes
                }
                <div className={css.container}>
                    <input type="text" onChange={(e)=>onChangeSearch(e)} placeholder="Search..." />
                    <div className={css.search}></div>
                </div>
            </div>
            <div className={css.filters}>
                {//Filtros de genero y de episodio
                }
                <div className={css.listChoice}>
                    <div className={css.listChoiceTitle}>Gender</div>
                    <div className={css.listChoiceObjects}>
                    <label onClick={()=>dispatch(filter("male"))}>
                        <input type="radio" name="gender"/><span>Male</span>
                    </label>
                    <label onClick={()=>dispatch(filter("female"))}>
                        <input type="radio" name="gender"/><span>Female</span>
                    </label>
                    <label onClick={()=>dispatch(filter("All"))}>
                        <input type="radio" name="gender"/><span>All</span>
                    </label>
                    </div>
                </div>
                <div className={css.listChoice}>
                    <div className={css.listChoiceTitle}>Episode</div>
                    <div className={css.listChoiceObjects}>
                    <label onClick={()=>dispatch(filter("A New Hope"))}>
                        <input type="radio" name="episode"/><span>A New Hope</span>
                    </label>
                    <label onClick={()=>dispatch(filter("The Empire Strikes Back"))}>
                        <input type="radio" name="episode"/><span>The Empire Strikes Back</span>
                    </label>
                    <label onClick={()=>dispatch(filter("Return of the Jedi"))}>
                        <input type="radio" name="episode"/><span>Return of the Jedi</span>
                    </label>
                    <label onClick={()=>dispatch(filter("The Phantom Menace"))}>
                        <input type="radio" name="episode"/><span>The Phantom Menace</span>
                    </label>
                    <label onClick={()=>dispatch(filter("Attack of the Clones"))}>
                        <input type="radio" name="episode"/><span>Attack of the Clones</span>
                    </label>
                    <label onClick={()=>dispatch(filter("Revenge of the Sith"))}>
                        <input type="radio" name="episode"/><span>Revenge of the Sith</span>
                    </label>
                    <label onClick={()=>dispatch(filter("All"))}>
                        <input type="radio" name="episode"/><span>All</span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;