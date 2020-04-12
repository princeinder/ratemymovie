import axios from "axios";
import { apiUrl } from "../environments/environment";
import {authUserPending,signupUserSuccess, signupUserError,loginUserSuccess,loginUserError,logoutUserSuccess,isAuthSuccess} from "./types";


export function signupUser(signupdata){
   
    return(dispatch)=>{
        dispatch(authUserPending());
        return axios.post(apiUrl+"/user/create",signupdata).then((response)=>{
            if(response.data.success==false)
            dispatch(signupUserError(response.data.message));
            else
            dispatch(signupUserSuccess(response.data.user));
        }).catch(err =>
            console.log(err)
          );
    }
}

export function loginUser(logindata){
   
    return(dispatch)=>{
        dispatch(authUserPending());
        return axios.post(apiUrl+"/user/login",logindata).then((response)=>{
            if(response.data.success==false){
            dispatch(loginUserError(response.data.message));
            }
            else{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            dispatch(loginUserSuccess(response.data.user));
        }}).catch(err =>
            console.log(err)
          );
    }
}

export function logoutUser(){
   
    return(dispatch)=>{
            dispatch(authUserPending());
            localStorage.removeItem("token");
            localStorage.removeItem('user');
            dispatch(logoutUserSuccess());
    }
}

export function isUserAuthenicated(){

    return(dispatch)=>{
        dispatch(authUserPending());
        if(localStorage.getItem('user') && localStorage.getItem('token'))
        dispatch(isAuthSuccess(localStorage.getItem('user')));
    }
}



