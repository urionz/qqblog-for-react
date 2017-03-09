import React, {Component} from 'react';

export default class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wenkmPlayer" className="ksclrc playing show"
                 style={{background: 'rgba(183, 171, 147, 0.8)', color: 'rgb(72, 71, 47)', display: 'block'}}>
                <div className="playlist">
                    <div className="playlist-bd">
                        <div className="album-list">
                            <div className="musicheader">爱在发烧(1歌单来自网易音乐)</div>
                            <div className="list mCustomScrollbar _mCS_2">
                                <div className="mCustomScrollBox mCS-light" id="mCSB_2"
                                     style={{position:'relative', height:'100%', overflow:'hidden', maxWidth:'100%'}}>
                                    <div className="mCSB_container mCS_no_scrollbar"
                                         style={{position:'relative', top:'0'}}>
                                        <ul>
                                            <li title="爱在发烧音乐库 - 来自网易音乐" className="current">
                                                <i className="fa fa-angle-right" aria-hidden="true"/>
                                                <span className="index">1</span>
                                                <span className="artist">当前播放&gt;</span>爱在发烧音乐库 - 来自网易音乐
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mCSB_scrollTools" style={{position: 'absolute', display: 'none'}}>
                                        <div className="mCSB_draggerContainer">
                                            <div className="mCSB_dragger" style={{position: 'absolute', top: '0px'}}>
                                                <div className="mCSB_dragger_bar" style={{position:'relative'}}></div>
                                            </div>
                                            <div className="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="song-list">
                            <div className="musicheader">
                                <i className="fa fa-angle-right"/>
                                <span></span>
                            </div>
                            <div className="list mCustomScrollbar _mCS_1">
                                <div className="mCustomScrollBox mCS-light" id="mCSB_1"
                                     style={{position:'relative', height:'100%', overflow:'hidden', maxWidth:'100%'}}>
                                    <div className="mCSB_container mCS_no_scrollbar"
                                         style={{position:'relative', top:'0'}}>
                                        <ul></ul>
                                    </div>
                                    <div className="mCSB_scrollTools" style={{position: 'absolute', display: 'none'}}>
                                        <div className="mCSB_draggerContainer">
                                            <div className="mCSB_dragger" style={{position: 'absolute', top: '0px'}}>
                                                <div className="mCSB_dragger_bar" style={{position:'relative'}}></div>
                                            </div>
                                            <div className="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player">
                    <div className="blur-img"></div>
                    <div className="infos">
			            <span className="songstyle">
				            <span className="song">
                                <span title="歌曲：Jar Of Love">Jar Of Love</span>
                            </span> -
                            <span className="artist">
                                <span title="歌手：曲婉婷">曲婉婷</span>
                            </span>
                        </span>
                        <span className="timestyle">
				            <span className="time">00:47 / 03:52</span>
			            </span>
                    </div>
                    <div className="control">
                        <i className="loop fa fa-retweet" title="顺序播放"/>
                        <i className="prev fa fa-backward" title="上一首"/>
                        <i className="play fa fa-play" title="播放"/>
                        <i id="w_pause" className="pause fa fa-pause" title="暂停"/>
                        <i className="next fa fa-forward" title="下一首"/>
                        <i className="random fa fa-random current" title="随机播放"/>
                    </div>
                    <div className="musicbottom">
                        <div className="volume">
                            <i className="mute fa fa-volume-off"/>
                            <div className="progress">
                                <div className="volume-on ts5" style={{width: '90%'}}>
                                    <div className="drag" title="音量"></div>
                                </div>
                            </div>
                        </div>
                        <div className="switch-playlist">
                            <i className="fa fa-bars" title="播放列表"/>
                        </div>
                        <div className="switch-ksclrc" style={{display: 'block'}}>
                            <i className="fa fa-toggle-off" aria-hidden="true" title="歌词隐藏"/>
                        </div>
                        <div className="switch-default" style={{right: '95px'}}>
                            <i className="fa fa-refresh" title="切换默认专辑"/>
                        </div>
                        <div className="switch-down" style={{display: 'block', right: '65px'}}>
                            <a className="down"><i className="fa fa-cloud-download" aria-hidden="true"
                                               title="从网易音乐下载：Jar Of Love - 曲婉婷"/></a>
                        </div>
                    </div>
                    <div className="cover coverplay">
                        <a className="pic" title="查看歌曲封面图">
                            <img src="http://p3.music.126.net/8jt2KnGDF0qMP9JbidOtVA==/573945069746475.jpg"/>
                        </a>
                    </div>
                </div>
                <div className="switch-player" style={{background: 'rgba(183, 171, 147, 0.8)'}} title="隐藏播放器">
                    <i className="fa fa-angle-right" style={{marginTop: '20px'}}/>
                </div>
            </div>
        );
    }
}
