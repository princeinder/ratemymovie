export const FETCH_MOVIES_LOADING = 'FETCH_MOVIES_LOADING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';


export const FETCH_MOVIE_LOADING = 'FETCH_MOVIE_LOADING';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';


export const AUTH_USER_PENDING='AUTH_USER_PENDING';

export const SIGNUP_USER_SUCCESS='SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR='SIGNUP_USER_ERROR';

export const LOGIN_USER_SUCCESS='LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR='LOGIN_USER_ERROR';

export const LOGOUT_USER_SUCCESS='LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR='LOGOUT_USER_ERROR';

export const IS_AUTH_SUCCESS='IS_AUTH_SUCCESS';



export function fetchMoviesPending() {
    return {
        type: FETCH_MOVIES_LOADING
    }
}

export function fetchMoviesSuccess(movies) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        movies: movies
    }
}

export function fetchMoviesError(error) {
    return {
        type: FETCH_MOVIES_ERROR,
        error: error
    }
}


// Movie single //

export function fetchMoviePending() {
    return {
        type: FETCH_MOVIE_LOADING
    }
}

export function fetchMovieSuccess(movie) {
    return {
        type: FETCH_MOVIE_SUCCESS,
        movie: movie
    }
}

export function fetchMovieError(error) {
    return {
        type: FETCH_MOVIE_ERROR,
        error: error
    }
}



// Movie single //


//User //

export function authUserPending() {
    return {
        type: AUTH_USER_PENDING,
     
    }
}

export function signupUserSuccess(user) {
    return {
        type: SIGNUP_USER_SUCCESS,
        user: user
    }
}

export function signupUserError(error) {
    return {
        type: SIGNUP_USER_ERROR,
        error: error
    }
}


export function loginUserSuccess(user) {
   console.log(user)
    return {
        type: LOGIN_USER_SUCCESS,
        user: user
    }
}

export function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        error: error
    }
}



export function logoutUserSuccess() {
    return {
        type: LOGOUT_USER_SUCCESS,
    }
}

export function logoutUserError(error) {
    return {
        type: LOGOUT_USER_ERROR,
        error: error
    }
}

export function isAuthSuccess(currentuser){
    return {
        type: IS_AUTH_SUCCESS,
        currentuser:currentuser
    }
    
}




//User //