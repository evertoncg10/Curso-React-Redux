export function increment() {
    return { type: 'INCREMENT' }
}

export function decrement() {
    return { type: 'DECREMENT' }
}

export function stepChanged(event) {
    return { 
        type: 'STEP_CHANGED',
        payload: event.target.value
    }
}