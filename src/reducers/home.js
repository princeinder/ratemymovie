import {FETCH_MOVIES_LOADING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR} from '../actions/types';

let initialState={
    loading:true,
    movies:[],
    movie:[],
    error:null
}

export default function homeReducer(state = initialState, action){
    switch(action.type) {

        case FETCH_MOVIES_LOADING: 
            return {
                ...state,
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default: 
            return state;
    }
}




