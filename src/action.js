import qs from 'query-string'
import fetchHelper from './helper/fetch-helper'
import config from './config'


export const UPDATE_URL = 'UPDATE_URL'
export const updateUrl = (url, options = {replace:false}) => {
    if(options && options.replace) {
        window.history.replaceState({}, null, url)
    }
    return {type: UPDATE_URL, payload:url, replace: options.replace }
}

export const DO_LOGIN = 'DO_LOGIN'
export const doLogin = () => {
    return  (dispatch) => {
        const loginUrl = 'https://github.com/login/oauth/authorize?' + qs.stringify({
                client_id: config.clientId,
                redirect_uri: `${window.location.origin}/auth/callback`,
                scope: 'user, repo'
            })
        dispatch({ type: DO_LOGIN, url: loginUrl })

        window.location = loginUrl
    }
}

//do logout
export const DO_LOGOUT = 'DO_LOGOUT'
export const doLogout = () => {
    return(dispatch) => {
        dispatch({type: DO_LOGOUT})
        window.localStorage.clear()
        window.location='/'
    }
}

//fetch_token
export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'



export const fetchTokenAndUser = (code) => {
   // const clientId = 'e311b22dbf1d7abed0b6'
    const clientId = config.clientId
    return (dispatch) => {
        dispatch({type: FETCH_TOKEN})
        fetchHelper(`https://redux-github.herokuapp.com/${clientId}/${code}`)
            .then((data) => {
                const token = window.localStorage.token = data.access_token
                dispatch({type: FETCH_TOKEN_SUCCESS, payload : token})
            }).catch((error)=>{
                dispatch({type: FETCH_TOKEN_ERROR, error})
            })
            .then(()=>{
                dispatch(fetchUser())
            })
    }
}

//FETCH_USER
export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export const fetchUser =() =>{
    return(dispatch) => {
        fetchHelper('/user')
        .then((data)=>{
                window.localStorage.user = JSON.stringify(data, null, 2)
                dispatch({type: FETCH_USER_SUCCESS, payload : data})
            })
        .catch((error)=>{
                dispatch({type: FETCH_USER_ERROR, error})
            })
    }
}

//FETCH SUBSCRIPTIONS
export const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS'
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS'
export const FETCH_SUBSCRIPTIONS_ERROR = 'FETCH_SUBSCRIPTIONS_ERROR'

export const fetchSubscriptions=() => {
    return(dispatch) => {
        fetchHelper('/user/subscriptions')
        .then((data)=>{
                dispatch({type: FETCH_SUBSCRIPTIONS_SUCCESS, payload : data})
            })
        .catch((error)=>{
                dispatch({type: FETCH_SUBSCRIPTIONS_ERROR, error})
            })
    }
}
