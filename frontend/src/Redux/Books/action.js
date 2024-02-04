import axios from "axios";
import { DELETE_BOOK_SUCCESS, GET_BOOK_FAILURE, GET_BOOK_REQUEST, GET_BOOK_SUCCESS, POST_BOOK_SUCCESS } from "../actionTypes";

const URL="";

export const addBook=(data)=>async(dispatch)=>{
    try {
        dispatch({type:GET_BOOK_REQUEST});

         await axios.post(`${URL}`,data)
        dispatch({type: POST_BOOK_SUCCESS})
    } catch (error) {
        dispatch({type:GET_BOOK_FAILURE});
    }  
}

export const getBook=async(dispatch)=>{
    try {
        dispatch({type:GET_BOOK_REQUEST});

        let get= await axios.get(`${URL}`)
        console.log(get)
        dispatch({type:GET_BOOK_SUCCESS,payload:get.data})
        return get.data;
    } catch (error) {
        dispatch({type:GET_BOOK_FAILURE});
    }
}

export const deleteBook=(id)=>async(dispatch)=>{
try {
    let remove = await axios.delete(`${URL}`)
    console.log(remove.data)

    dispatch({type:DELETE_BOOK_SUCCESS, payload: id})
} catch (error) {
    
}
}
