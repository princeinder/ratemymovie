import axios from "axios";
import { apiUrl } from "../environments/environment";
import { fetchMoviesPending, fetchMoviesSuccess,fetchMoviesError } from "./types";

export function fetchMovies(orderby,ordersort,option,page,search){
    return(dispatch)=>{
        dispatch(fetchMoviesPending());
        return axios.get(apiUrl+"/movies/"+orderby+"/"+ordersort+"/"+option+"/"+page+"/"+search).then((response)=>{
            dispatch(fetchMoviesSuccess(response.data.movies));
            if(response.data.success==false)
            dispatch(fetchMoviesError(response.data.message));
        }).catch(err =>
            dispatch(fetchMoviesError(err))
        );

    }
}







