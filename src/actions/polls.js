export const REICEIVE_POLLS = 'RECEIVE_POLLS'

export function receivePolls(polls) {
    return {
        type: REICEIVE_POLLS,
        polls
    }
}