import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import{Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';


//reducers

const feedback = (state= [], action)=>{
    if(action.type === 'ADD_FEEDBACK'){
        // return [...state, action.payload];
        console.log('action.payload:', action.payload);
        // state = action.payload;
        // console.log('state:', state);
        // return state;
        return[...state, action.payload];
        
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
)

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
