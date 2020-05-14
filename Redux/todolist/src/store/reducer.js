import * as actionTypes from './action'

const initialState = {
    list:
        [
            { title: 'hi', content: 'This is greeting' }
        ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        

        default:
            return state
    }
}

export default reducer