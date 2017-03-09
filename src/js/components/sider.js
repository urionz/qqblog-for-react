import React, {Component} from 'react';
import LatestPublish from './latesPublish';
import LatestComment from './latestComment';
import Search from './search';

export default class Sider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <LatestPublish />
                <LatestComment />
                <Search />
            </div>
        );
    }
}