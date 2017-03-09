import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="m-footer" className="foot">
                <div className="container">
                    <div className="f-copy">
                        ©2017&nbsp;爱在发烧 . All Rights Reserved&nbsp;.&nbsp;theme by <a
                        href="">爱在发烧</a> &nbsp;
                    </div>
                </div>
            </footer>
        );
    }
}