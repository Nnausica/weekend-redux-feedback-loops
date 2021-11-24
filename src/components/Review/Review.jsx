import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';



function Review(){
    // const[name, setName]= useState(null);
    
    const dispatch = useDispatch();

    const feedback = useSelector(store=> store.feedback);

    const postFeedback=()=>{
        console.log('POST route OK');
        console.log('feedback being posted:', feedback)

        axios.post(`/feedback`, feedback).then( (response)=>{
            dispatch({ type: 'EMPTY'});
        }).catch((err)=>{
            alert('error in POST'); 
            console.log(error);
        })
    }

return(
    <div>
        <p>Review your Feedback</p>
        <p>Feeling: {feedback[0]}</p>
        <p>Understanding: {feedback[1]}</p>
        <p>Supported: {feedback[2]}</p>
        <p>Comments: {feedback[3]}</p>
        

        <button onClick={postFeedback}><Link to="/thanks">NEXT</Link></button>

    </div>
)}

export default Review;