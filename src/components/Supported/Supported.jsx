import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Supported(){
    // const[name, setName]= useState(null);
    const dispatch = useDispatch();

    const[Supported, newSupported]= useState(0);

    const getSupported = ()=>{
        console.log('in addSupported', event.target.value);
        newSupported(event.target.value);
    }

    const feedback = useSelector(store=> store.feedback);
return(
    <div>
        <p>How well are you being supported?</p>

        <label for="Supported">Supported:</label>

            <select value={Supported} onChange={(event)=>getSupported(event)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
        
            <button onClick={()=>dispatch({type:'ADD_FEEDBACK', payload: Supported})}><Link to="/comments">NEXT</Link></button>

    </div>
)}

export default Supported;