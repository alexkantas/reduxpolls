import { REICEIVE_POLLS } from '../actions/polls'

export default function polls(state = {}, action) {
    switch (action.type) {
        case REICEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        default:
            return state;

    }
}