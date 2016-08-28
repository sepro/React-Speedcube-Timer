
function results(state = [], action) {
    switch(action.type) {
        case 'ADD_RESULT' :
            return [...state, action.data];
        default:
            return state;
    }
}

export default results;