import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import{Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';


//reducers

const feedback = (state= [], action)=>{
    console.log("this is the action:", action)

    //pushes responses into an array that is saved in the store
    if(action.type === 'ADD_FEEDBACK'){
        console.log('action.payload:', action.payload);
        return[...state, action.payload];
        }
    //takes empty array once responses are pushed to DB and emptys the store
    else if (action.type === 'EMPTY'){
        return[];
    }
    return state
}

//store
const storeInstance = createStore(
    combineReducers(
        {
        feedback
        }
    )
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
