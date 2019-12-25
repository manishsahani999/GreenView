import { combineReducers } from 'redux';

import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

import { authentication } from './authentication.reducer';
import { userReducer as user } from './users.reducer';
import { plantImageReducer as plantImages } from './plantImage.reducer';


const rootReducer = combineReducers({
    authentication, user, plantImages, loadingBar
});

export default rootReducer;

