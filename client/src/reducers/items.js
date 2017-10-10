let initialState = {
    someString: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
};