export function changeValue(event) {
    console.log('changeValue');
    return {
        type: 'VALUE_CHANGE',
        payload: event.target.value
    }
}