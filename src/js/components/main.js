import React, {Component} from 'react';
import Nav from './nav';
import Sign from './sign';
import Footer from './footer';
import Player from './player';
import Top from './top';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Nav />
                <div id="m-container">
                    {this.props.children}
                </div>
                <Player />
                <Footer />
                <Top />
            </div>
        );
    }
}