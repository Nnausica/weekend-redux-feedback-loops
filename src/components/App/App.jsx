import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import ThankYou from '../ThankYou/ThankYou'
import Review from '../Review/Review'

function App() {

  const dispatch = useDispatch();
  const feedback = useSelector(store=> store.feedback);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <p>{JSON.stringify(feedback)}</p>
      </header>
      <body>
        <Feeling/>
        <Understanding/>
        <Supported/>
        <Comments/>
        <ThankYou/>
        <Review/>
      </body>
    </div>
  );
}

export default App;
