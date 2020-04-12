import {AUTH_USER_PENDING,SIGNUP_USER_SUCCESS,SIGNUP_USER_ERROR,LOGIN_USER_ERROR,LOGIN_USER_SUCCESS,LOGOUT_USER_SUCCESS,IS_AUTH_SUCCESS} from '../actions/types';

let initialState={
    loading:true,
    user:[],
    currentuser:[],
    isAuthenticated: false,
    error:null
}


export default function authReducer(state = initialState, action){    
    switch(action.type) {

        case AUTH_USER_PENDING: 
            return {
                ...state,
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                error:null
            }
        case SIGNUP_USER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated:true,
                user: action.user,
                loading: false,
                error:null
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        
        case LOGOUT_USER_SUCCESS:
                    return {
                        ...state,
                        isAuthenticated: false,
                        loading: false
        }
        case IS_AUTH_SUCCESS:
                    return {
                        ...state,
                        isAuthenticated: true,
                        currentuser:action.currentuser,
                        loading: false
        }

        default: 
            return state;
    }
}


