const logger = store => next => action => {
    console.group(action.type);
    console.log('The action:', action.type)
    console.log('The state:', store.getState())
    const returnValue = next(action)
    console.log('The nextstate:', store.getState())
    console.groupEnd()
    return returnValue;
}

export default logger;