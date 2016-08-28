
function times(state = [], action) {
    switch(action.type) {
        case 'ADD_TIME' :
            return [...state, action.data];
        default:
            return state;
    }
}

export default times;