const Counter = (state = { counter1:0 , counter2:0 }, action:any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter1: state.counter1 + 1,
                counter2: state.counter2 + 2
            };

        case 'DECREMENT':
            return {
                ...state,
                counter1: state.counter1 - 1,
                counter2: state.counter2 - 2
            };

        default:
            return state
    }
}
export default Counter;