const middlewarelogger = store => next => action => {
    console.log('Original State:', store.getState());
    console.log('Current Action:', action);
    next(action);
    console.log('New Updated State:', store.getState());
};

export default middlewarelogger;