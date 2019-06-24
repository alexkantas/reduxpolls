import {combineReducers} from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import authUser from './authUser'
import polls from './polls'
import users from './users'

export default combineReducers({
    authUser,
    users,
    polls,
    loadingBar: loadingBarReducer
});