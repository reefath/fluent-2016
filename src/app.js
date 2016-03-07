import React from 'react';
import LogIn from './pages/login';
import Nav from './component/nav'

//const App = () => {
//    return (
//        <div>Hello</div>
//    )
//}

const App= ({url}) => {
    let page, nav

    if (url === '/') {
        page = <LogIn/>
    }

    if(url !== '/') {
        nav =  <Nav/>
    }

    return(
        <div>
            {nav}
            <div className='container'>
                {page}
            </div>
        </div>
    )
}

export default App