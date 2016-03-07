import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './app';
import './styles/main.styl';


render(<App url={window.location.pathname}/>, document.body.firstChild)

//const Hello = React.createClass({
//
//    render () {
//        return <div>Hello, FLuent poeple </div>
//    }
//})
//render(<Hello/>, document.body)
//document.write('hello fluent')

//const Hello =({name})=> {
//    return <div>Hello, FLUENT people {name}</div>
//}
//
//render (<Hello name='Reefath'/>, document.body)