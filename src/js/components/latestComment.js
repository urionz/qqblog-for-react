import React, {Component} from 'react';

export default class LatestComment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="widget widget_ui_posts"><h3 className="widget_tit">最新评论</h3>
                <div className="cbl-comment">
                    <ul>
                        <li>
                            <a href="" title="淘小众在友链发表的评论">
                                <img className="avatar avatar-40 photo" height="40" width="40"
                                     src="http://azfashao.com/wp-content/themes/QQ/images/avatar-default.png"/>
                                <span className="muted">淘小众</span><br />你好，我是小众网站站长，长期以来，一直与贵站交换友链，由于网站改版，网站名称现已改为淘小众，网址也改为http://taoxiaozhong.com，希望能麻烦更新下贵站的友链地址，或者友链直接写小众实用导航（http://taoxiaozhong.com/dh）也可以，谢谢
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
