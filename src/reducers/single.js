import {FETCH_MOVIE_LOADING, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR} from '../actions/types';

let initialState={
    loading:true,
    movie:[],
    error:null
}

export default function singleReducer(state = initialState, action){
    switch(action.type) {


        case FETCH_MOVIE_LOADING: 
            return {
                ...state,
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.movie,
                loading: false
            }
        case FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default: 
            return state;
    }
}




