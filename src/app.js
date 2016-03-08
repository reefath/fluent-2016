import React from 'react';
import LogIn from './pages/login';
import WatchedReposPage from './pages/watched-repo';
import Nav from './component/nav'
import {connect} from 'react-redux'
import NavHelper from 'react-internal-nav'
import {updateUrl, doLogin, doLogout, fetchSubscriptions} from './action'
import renderUrl from './helper/render-url'

//const App = () => {
//    return (
//        <div>Hello</div>
//    )
//}

const App= (props) => {
    const {userData, doLogout, doLogin, updateUrl, url, fetchSubscriptions} = props
    let page, nav

    renderUrl(url)

    if (url === '/') {
        page = <LogIn doLogin={doLogin}/>
    } else if (url === '/watched-repos') {
        page = <WatchedReposPage fetchSubscriptions={fetchSubscriptions}/>
    }

    if(url !== '/') {
        nav =  <Nav userData={userData} doLogout={doLogout}/>
    }

    return(
        <NavHelper onInternalNav={updateUrl}>
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

const actionCreatorsToBind = {
    updateUrl,
    doLogin,
    doLogout,
    fetchSubscriptions


}
//mapstatetoprops
export default connect(select, actionCreatorsToBind)(App)