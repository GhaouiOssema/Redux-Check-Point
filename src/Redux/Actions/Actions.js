// actions 
import { ADD_TODO , SET_TODO , DELETE_TODO , COMPLETE_TODO , UPDATE_TODO} from '../Constants/Actions-Type'


export const addTodo = (payload) => {
    return {type: ADD_TODO, payload} 
 };

export const setInput =(payload) => {
    return {type:SET_TODO, payload}
};

export const Delete =(payload) => {
    return {type:DELETE_TODO, payload}
};

export const Complete =(payload) => {
    return {type:COMPLETE_TODO, payload}
};

export const Edit =(payload) => {
    return {type:UPDATE_TODO, payload}
};