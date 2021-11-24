import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';



function Review(){
    // const[name, setName]= useState(null);
    const dispatch = useDispatch();

    const feedback = useSelector(store=> store.feedback);

return(
    <div>
        <p>Review your Feedback</p>
        <p>Feeling: {feedback.feeling}</p>
        

        <button><Link to="/thanks">NEXT</Link></button>

    </div>
)}

export default Review;