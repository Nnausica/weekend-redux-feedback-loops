import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Feeling(){
    // const[name, setName]= useState(null);
    const dispatch = useDispatch();

    const[feeling, newFeeling]= useState(1);

    const getFeeling = ()=>{
        console.log('in addFeeling', event.target.value);
        newFeeling(event.target.value);
    }
    const feedback = useSelector(store=> store.feedback);

return(
    <div>
        <p>How are you feeling today?</p>

        <label for="Feeling">Feeling:</label>

            <select value={feeling} onChange={(event)=>getFeeling(event)}>
            {/* <option value=""></option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            
            <button onClick={()=>dispatch({type:'ADD_FEEDBACK', payload: feeling})}><Link to="/understanding">NEXT</Link></button>

    </div>
)}

export default Feeling;