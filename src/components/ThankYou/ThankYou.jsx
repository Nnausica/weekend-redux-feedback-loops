import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function ThankYou(){
    // const[name, setName]= useState(null);

return(
    <div>
        <p>ThankYou!</p>
        
        <button><Link to="/">Leave New Feedback!</Link></button>

    </div>
)}

export default ThankYou;