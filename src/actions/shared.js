import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authUser';

const AUTHED_ID = 'Alex_Kantas'

export default function handleInitalData() {
    return dispatch => {
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}