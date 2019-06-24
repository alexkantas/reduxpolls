import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const REICEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'

export function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function handleAddPoll(poll) {
    return (dispatch, getState) => {
        const { authUser } = getState()

        dispatch(showLoading())
        return savePoll({
            ...poll,
            author: authUser
        })
            .then(poll => {
                dispatch(addPoll(poll))
                dispatch(hideLoading())
            })
    }
}

export function receivePolls(polls) {
    return {
        type: REICEIVE_POLLS,
        polls
    }
}