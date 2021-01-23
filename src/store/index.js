import reducer from './reducers'
import {createStore} from 'redux'

function saveToLocalStore(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    }catch(e){
        console.log(e)
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}

const store = createStore(
    reducer, 
    loadFromLocalStorage(), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

store.subscribe(e=>saveToLocalStore(store.getState()))


export default store;