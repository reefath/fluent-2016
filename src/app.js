import React from 'react';
import LogIn from './pages/login';
import Nav from './component/nav'
import {connect} from 'react-redux'
import NavHelper from 'react-internal-nav'
import {updateUrl, doLogin} from './action'
import renderUrl from './helper/render-url'

//const App = () => {
//    return (
//        <div>Hello</div>
//    )
//}

const App= (props) => {
    const {userData, doLogin, updateUrl, url} = props
    let page, nav

    renderUrl(url)

    if (url === '/') {
        page = <LogIn doLogin={doLogin}/>
    }

    if(url !== '/') {
        nav =  <Nav userData={userData}/>
    }

    return(
        <NavHelper onInternaNav={updateUrl}>
            {nav}
            <div className='container'>
                {page}
            </div>
        </NavHelper>
    )
}

const select = (state) => {
    return {
        url: state.route.url,
        userData: state.me.data
    }
}

export default connect(select, {updateUrl, doLogin})(App)