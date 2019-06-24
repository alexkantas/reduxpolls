import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const AUTHED_ID = 'Alex_Kantas'

export default function handleInitalData() {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}