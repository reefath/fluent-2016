import {
    FETCH_SUBSCRIPTIONS,
    FETCH_SUBSCRIPTIONS_SUCCESS,
    FETCH_SUBSCRIPTIONS_ERROR
    }
    from '../action'

const initialState = {
    data: [],
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUBSCRIPTIONS: {
            return Object.assign({}, state, {loading:true})

        }
        case FETCH_SUBSCRIPTIONS_SUCCESS: {
            return Object.assign({}, state, {
                    loading:false,
                    error: null,
                    data: action.payload
                }
            )
        }
        case FETCH_SUBSCRIPTIONS_ERROR: {
            return Object.assign({}, state, {
                    loading:false,
                    error: action.error}
            )
        }
    }

    return state;

}