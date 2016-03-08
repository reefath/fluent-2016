import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'
import createStore from './store'
import { Provider } from 'react-redux'
import {updateUrl, fetchTokenAndUser} from './action'
import qs from 'query-string'
import ensurePolyfills from './helper/polyfills'

const store = window.store = createStore()

ensurePolyfills(()=>{
    if (window.location.pathname === '/auth/callback') {
        const query = qs.parse(window.location.search)
        console.log(query)
        store.dispatch(fetchTokenAndUser(query.code))
        store.dispatch(updateUrl('/watched-repos', {replace:true}))
    }


    const setCurrentUrl = () => {
        store.dispatch(updateUrl(window.location.pathname))
    }
    if(window.location.pathname !== store.getState().route.url) {
        setCurrentUrl()
    }

    window.addEventListener('popstate', setCurrentUrl)
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.body.firstChild
    )
})





/*
 render(<App url={window.location.pathname}/>, document.body.firstChild)
const Hello = React.createClass({

    render () {
        return <div>Hello, FLuent poeple </div>
    }
})
render(<Hello/>, document.body)
document.write('hello fluent')

const Hello =({name})=> {
    return <div>Hello, FLUENT people {name}</div>
}

render (<Hello name='Reefath'/>, document.body)

    */