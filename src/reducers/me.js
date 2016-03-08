import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    FETCH_TOKEN_SUCCESS}
    from '../action'

const token = window.localStorage.token || ''
const initialState = {
    data: null,
    token: token,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER: {
            return Object.assign({}, state, {loading:true})
        }
        case FETCH_USER_ERROR: {
            return Object.assign({}, state, {
                loading:false,
                error: action.error}
            )
        }
        case FETCH_USER_SUCCESS: {
            return Object.assign({}, state, {
                    loading:false,
                    error: null,
                    data: action.payload
                }
            )
        }
        case FETCH_TOKEN_SUCCESS: {
            return Object.assign({}, state, {
                    token: action.payload
                }
            )
        }
    }

    return state;

}