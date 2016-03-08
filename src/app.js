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

const App= ({doLogin, updateUrl, url}) => {
    let page, nav

    renderUrl(url)

    if (url === '/') {
        page = <LogIn doLogin={doLogin}/>
    }

    if(url !== '/') {
        nav =  <Nav/>
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
        url: state.route.url
    }
}

export default connect(select, {updateUrl, doLogin})(App)