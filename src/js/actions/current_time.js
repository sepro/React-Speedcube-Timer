export function increase_time(data) {
    return {
        type: 'INCREASE',
        data
    }
}

export function reset_time() {
    return {
        type: 'RESET'
    }
}