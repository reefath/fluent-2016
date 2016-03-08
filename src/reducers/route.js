import {UPDATE_URL} from '../action'
const initialState = {
    url: '/'
}

export default (state = initialState, action) => {
    if (action.type !== UPDATE_URL) {
        return state
    }

    return Object.assign({}, state, {url: action.payload})
}