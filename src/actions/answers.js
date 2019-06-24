import { savePollAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_ANSWER = 'ADD_ANSWER'

function addAnswer({ authedUser, id, answer }) {
    return {
        type: ADD_ANSWER,
        authedUser,
        id,
        answer
    }
}

export function handleAddAnswer(answerData) {
    return async (dispatch) => {
        dispatch(showLoading())
        await savePollAnswer(answerData)
        dispatch(addAnswer(answerData))
        dispatch(hideLoading())
    }
}