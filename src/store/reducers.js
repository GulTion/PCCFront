import {combineReducers} from 'redux'
function TaskReducers(state={list:[]}, action){
    const {type} = action;
    switch(type){
        case 'ADD':
            return {...state, list:[...state.list, 'NUMBER']}
        default:
            return state
    }
}

const reducer = combineReducers({
    Task:TaskReducers
})

export default reducer;