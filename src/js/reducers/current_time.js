
function current_time(state = 0, action) {
    switch(action.type) {
        case 'INCREASE' :
            return state + action.data;
        default:
            return state;
    }
}

export default current_time;