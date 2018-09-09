import { SET_AUTH_USER } from '../actions/authUser'
var log=0;
export default function authUser(state = null, action) {
    console.log('pw tria state',state,++log);
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}