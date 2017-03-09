import React, {Component} from 'react';
import Sign from '../components/sign';
import Nav from '../components/nav';
import {connect} from 'react-redux';

class HeaderContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <Nav />
            <Sign />
        </div>
    }
}

function mapStateToProps(store) {
    return {
        SignShow: store.SignShow
    }
}

export default connect(mapStateToProps)(HeaderContainer);