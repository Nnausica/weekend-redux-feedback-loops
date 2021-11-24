import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Comments(){
    // const[name, setName]= useState(null);
    const dispatch = useDispatch();

    const[Comments, newComments]= useState(0);

    const getComments = ()=>{
        console.log('in addComments', event.target.value);
        newComments(event.target.value);
    }

    const feedback = useSelector(store=> store.feedback);
return(
    <div>
        <p>Any comments you want to leave?</p>

        <label for="Comments">Comments:</label>

        <input type="text" placeholder="Comments" onChange={(event)=>getComments(event)}></input>
        <button onClick={()=>dispatch({type:'ADD_FEEDBACK', payload: Comments})}><Link to="/review">Submit</Link></button>

    </div>
)}

export default Comments;