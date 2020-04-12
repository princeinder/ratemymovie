import axios from "axios";
import { apiUrl } from "../environments/environment";
import {fetchMoviePending, fetchMovieSuccess,fetchMovieError } from "./types";



export function fetchMovie(id,limit,reviewpage){
    return(dispatch)=>{
        dispatch(fetchMoviePending());
        return axios.get(apiUrl+"/movie/"+id+'/'+limit+'/'+reviewpage).then((response)=>{
            if(response.data.success==false)
            dispatch(fetchMovieError(response.data.message));
            else
            dispatch(fetchMovieSuccess(response.data.movie));
        })
    }
}





