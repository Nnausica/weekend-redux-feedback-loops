import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Understanding(){
    // const[name, setName]= useState(null);
    const dispatch = useDispatch();

    const[Understanding, newUnderstanding]= useState(0);

    const getUnderstanding = ()=>{
        console.log('in addUnderstanding', event.target.value);
        newUnderstanding(event.target.value);
    }
    const feedback = useSelector(store=> store.feedback);

return(
    <div>
        <p>How well are you understanding the content?</p>

        <label for="Understanding">Understanding:</label>

            <select value={Understanding} onChange={(event)=>getUnderstanding(event)}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
        
            <button onClick={()=>dispatch({type:'ADD_FEEDBACK', payload: Understanding})}><Link to="/support">NEXT</Link></button>
    </div>
)}

export default Understanding;