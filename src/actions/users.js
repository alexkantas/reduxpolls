export const REICEIVE_USERS = 'REICEIVE_USERS'

export function receiveUsers(users) {
    return {
        type: REICEIVE_USERS,
        users
    }
}