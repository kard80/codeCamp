const redux = require('redux')

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREASE_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}

//store
const store = redux.createStore(rootReducer)
console.log(store.getState())

//subscription
store.subscribe (() => {
    console.log('[Subscription]', store.getState())
})

//action
store.dispatch({type: "INCREASE_COUNTER"})
console.log(store.getState())
store.dispatch({type: "ADD_COUNTER", value: 5})
console.log(store.getState())