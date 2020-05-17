import * as actionTypes from './action'

const initialState = {
    name: [],
    age: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NAME:
            const newName = {
                name: action.name,
                age: action.age
            }
            return { name: state.name.concat(newName) }
        case actionTypes.DEL_NAME:
            console.log(`${action.id}`)
            return {
                name: state.name.filter(item => item.id !== action.id),
                // age: state.age.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}


export default reducer