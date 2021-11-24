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
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
            <p>{JSON.stringify(feedback)}</p>
        </header>
        <p>Review your Feedback</p>
        <p>Feeling: {feedback.feeling}</p>
        

        <button>Submit</button>

    </div>
)}

export default Review;