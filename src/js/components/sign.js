import React, {Component} from 'react';

export default class Sign extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="sign" className="sign">
                <div className="part loginPart">
                    <form id="login" action="" method="post" novalidate="novalidate">
                        <div id="register-active" className="switch"><i className="fa fa-toggle-on"></i>切换注册</div>
                        <h3>登录<p className="status"></p></h3>
                        <p>
                            <label className="icon" for="username"><i className="fa fa-user"></i></label>
                            <input className="input-control" id="username" type="text" placeholder="请输入用户名" name="username" required="" aria-required="true" />
                        </p>
                        <p>
                            <label className="icon" for="password"><i className="fa fa-lock"></i></label>
                            <input className="input-control" id="password" type="password" placeholder="请输入密码" name="password" required="" aria-required="true" />
                        </p>
                        <p className="safe">
                            <label className="remembermetext" for="rememberme">
                                <input name="rememberme" type="checkbox" checked="checked" id="rememberme" className="rememberme" value="forever" />记住我的登录
                            </label>
                            <a className="lost" href="">忘记密码 ?</a>
                        </p>
                        <p>
                            <input className="submit" type="submit" value="登录" name="submit" />
                        </p>
                        <a className="close"><i className="fa fa-times"></i></a>
                        <input type="hidden" id="security" name="security" value="8b6f251ccd" />
                        <input type="hidden" name="_wp_http_referer" value="/" />
                    </form>
                    <div className="other-sign">
                        <p>您也可以使用第三方帐号快捷登录</p>
                        <div className="2-col"><a className="qqlogin" href=""><i className="fa fa-qq"></i><span>Q Q 登 录</span></a></div>
                        <div className="2-col"><a className="weibologin" href=""><i className="fa fa-weibo"></i><span>微 博 登 录</span></a></div>
                    </div>
                </div>
                <div className="part registerPart">
                    <form id="register" action="" method="post" novalidate="novalidate">
                        <div id="login-active" className="switch"><i className="fa fa-toggle-off"></i>切换登录</div>
                        <h3>注册<p className="status"></p></h3>
                        <p>
                            <label className="icon" for="user_name"><i className="fa fa-user"></i></label>
                            <input className="input-control" id="user_name" type="text" name="user_name" placeholder="输入英文用户名" required="" aria-required="true" />
                        </p>
                        <p>
                            <label className="icon" for="user_email"><i className="fa fa-envelope"></i></label>
                            <input className="input-control" id="user_email" type="email" name="user_email" placeholder="输入常用邮箱" required="" aria-required="true" />
                        </p>
                        <p>
                            <label className="icon" for="user_pass"><i className="fa fa-lock"></i></label>
                            <input className="input-control" id="user_pass" type="password" name="user_pass" placeholder="密码最小长度为6" required="" aria-required="true" />
                        </p>
                        <p>
                            <label className="icon" for="user_pass2"><i className="fa fa-retweet"></i></label>
                            <input className="input-control" type="password" id="user_pass2" name="user_pass2" placeholder="再次输入密码" required="" aria-required="true" />
                        </p>
                        <p>
                            <input className="submit" type="submit" value="注册" name="submit" />
                        </p>
                        <a className="close">
                            <i className="fa fa-times"></i>
                        </a>
                        <input type="hidden" id="user_security" name="user_security" value="6aece207bf" />
                        <input type="hidden" name="_wp_http_referer" value="/" />
                    </form>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}