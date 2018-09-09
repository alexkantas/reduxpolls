import {combineReducers} from 'redux'
import authUser from './authUser'
import polls from './polls'
import users from './users'

export default combineReducers({
    authUser,
    users,
    polls
});