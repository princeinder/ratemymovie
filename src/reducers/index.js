import  homeReducer   from './home';
import  authReducer   from './auth';
import  singleReducer   from './single';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({home:homeReducer,auth:authReducer,single:singleReducer});

export default rootReducer;