import React, {Component} from 'react';

export default class LatestPublish extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="widget widget_ui_posts"><h3 className="widget_tit">最新发布</h3>
                <ul className="nopic">
                    <li>
                        <a href="" className="thumbnails">
                            <img src="http://ww1.sinaimg.cn/large/e7f5d00dgw1f60zvbhckhj20bu0gmdgu.jpg"/>
                        </a>
                        <h3>
                            <a href="">QQ主题导航添加图标 </a>
                        </h3>
                    </li>
                    <li>
                        <a href="" className="thumbnails">
                            <img src="http://ww1.sinaimg.cn/large/e7f5d00dgw1f6nixgrf8qj213p0nzwh8.jpg"/>
                        </a>
                        <h3>
                            <a href="">WordPress elegant单栏主题清新优雅而至 </a>
                        </h3>
                    </li>
                </ul>
            </section>
        );
    }
}