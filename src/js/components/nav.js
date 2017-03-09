import React, {Component} from 'react';
import {Link} from 'react-router';
import NProgress from 'nprogress';

let logo = 'http://q.qlogo.cn/qqapp/101209966/7EB4CCE605572261253E7265F177412E/100';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    loginBtnClick() {

    }

    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbar-header-logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="navbar-header">
                        <a href="" className="navbar-brand hidden-sm">爱在发烧</a>
                    </div>
                    <div className="navbar-header-login">
                        <ul>
                            <li style={{float: 'right', padding: '20px 15px'}}>
                                <a href="javascript:" onClick={this.loginBtnClick} className="user-login">
                                    <i className="fa fa-user"></i>登录
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-collapse collapse" role="navigation">
                        <ul className="main-nav navbar-qq nav-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-1004">
                                <a href=""><i className="fa fa-home"></i>首页样式一</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2309">
                                        <a href=""><i className="fa fa-home"></i>首页样式二</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2310">
                                        <a href=""><i className="fa fa-home"></i>首页样式三</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1005"><a
                                href=""><i className="fa fa-link"></i>友链</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2289"><a
                                href=""><i className="fa fa-photo"></i>相册欣赏</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2258">
                                <a href=""><i className="fa fa-music"></i>QQ音乐</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1654">
                                        <a href=""><i className="fa fa-star"></i>读者墙</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2064">
                                        <a href=""><i className="fa fa-calendar"></i>归档</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1718">
                                        <a href=""><i className="fa fa-weibo"></i>微博</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1008"><a
                                href=""><i className="fa fa-comments-o"></i>留言</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1566"><a
                                href=""><i className="fa fa-info"></i>关于我</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2364"><a
                                href=""><i className="fa fa-shopping-cart"></i>商城</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;

