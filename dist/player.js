jQuery.cookie = function(a, c, b) {
	if ("undefined" != typeof c) {
		b = b || {};
		null === c && (c = "", b.expires = -1);
		var d = "";
		b.expires && ("number" == typeof b.expires || b.expires.toUTCString) && ("number" == typeof b.expires ? (d = new Date, d.setTime(d.getTime() + 864E5 * b.expires)) : d = b.expires, d = "; expires=" + d.toUTCString());
		var e = b.path ? "; path=" + b.path : "",
			f = b.domain ? "; domain=" + b.domain : "";
		b = b.secure ? "; secure" : "";
		window.document.cookie = [a, "=", encodeURIComponent(c), d, e, f, b].join("")
	} else {
		c = null;
		if (window.document.cookie && "" != window.document.cookie) for (b = window.document.cookie.split(";"), d = 0; d < b.length; d++) if (e = jQuery.trim(b[d]), e.substring(0, a.length + 1) == a + "=") {
			c = decodeURIComponent(e.substring(a.length + 1));
			break
		}
		return c
	}
};
var NeiCeList;
if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) $("#wenkmPlayer").hide();
else if (top.location != self.location) $("#wenkmPlayer").hide();
else {
	var formatSecond = function(a) {
			return ("00" + Math.floor(a / 60)).substr(-2) + ":" + ("00" + Math.floor(a % 60)).substr(-2)
		},
		wenkmCicle = function() {
			$songTime.text(formatSecond(audio.currentTime) + " / " + formatSecond(audio.duration));
			audio.currentTime < audio.duration / 2 ? $btns.css("background-image", "linear-gradient(90deg, " + roundcolor + " 50%, transparent 50%, transparent), linear-gradient(" + (90 + 180 / (audio.duration / 2) * audio.currentTime) + "deg, " + lightcolor + " 50%, " + roundcolor + " 50%, " + roundcolor + ")") : $btns.css("background-image", "linear-gradient(" + (90 + 180 / (audio.duration / 2) * audio.currentTime) + "deg, " + lightcolor + " 50%, transparent 50%, transparent), linear-gradient(270deg, " + lightcolor + " 50%, " + roundcolor + " 50%, " + roundcolor + ")")
		};
	"YES" != geci ? (songFrom33 = "关闭", hasgeci = !1) : (songFrom33 = "开启", hasgeci = !0);
	random = "YES" != random ? 0 : 1;
	loop = mute = 0;
	var audio = new Audio,
		$player = $("#wenkmPlayer"),
		$tips = $("#wenkmTips"),
		$lrc = $("#wenkmLrc"),
		$play = $(".switch-player", $player),
		$bar = $(".musicbar", $play),
		$btns = $(".status", $player),
		$songName = $(".song", $player),
		$cover = $(".cover", $player),
		$songTime = $(".time", $player),
		$songList = $(".song-list .list", $player);
	$albumList = $(".album-list", $player);
	$songFrom = $(".player .artist", $player);
	$songFrom1 = $(".player .artist1", $player);
	$songFrom2 = $(".player .moshi", $player);
	$songFrom3 = $(".player .geci", $player);
	$songFrom4 = $(".player .switch-ksclrc", $player);
	$songFrom5 = $(".player .switch-down", $player);
	songFrom55 = songFrom44 = "";
	roundcolor = "#6c6971";
	lightcolor = "#81c300";
	cur = "current";
	volume = $.cookie("player_volume") ? $.cookie("player_volume") : ".9";
	songTotal = songId = albumId = 0;
	ycgeci = showLrc = !0;
	musicfirsttip = hasdefault = !1;
	var cicleTime = null;
	$cover.html('<img src="'+ themeurl +'/radio/inc/default.jpg">');
	$songName.html('<a href="http://azfashao.com/" target="_blank">歌单载入中</a>');
	$songFrom.html('<a href="http://azfashao.com/" target="_blank">请稍候</a>');
	$songFrom1.html('<a href="http://azfashao.com/" target="_blank">爱在发烧</a>');
	$songFrom3.html('<i class="fa fa-times-circle" aria-hidden="true"></i> 歌词未载入');
	if (type == "qq") {
		songFrom55 = "QQ音乐"
	} else if (type == "bd") {
		songFrom55 = "百度音乐"
	} else if (type == "xm") {
		songFrom55 = "虾米音乐"
	} else if (type == "wy") {
		songFrom55 = "网易音乐"
	}
	apiurl = ""+ themeurl +"/radio/music.php";
	fileurl = apiurl + "?do=song&id=" + user + "&sj=" + suiji + "&name=" + name + "&type=" + type + "&from=来自" + songFrom55;
	var wenkmMedia = {
		play: function() {
			$player.addClass("playing");
			cicleTime = setInterval(wenkmCicle, 800);
			hasLrc && (lrcTime = setInterval(wenkmLrc.lrc.play, 500), $("#wenkmLrc").addClass("show"), $(".switch-down").css("right", "65px"), $(".switch-default").css("right", "95px"), hasdefault ? setTimeout(function() {
				$(".switch-ksclrc").show()
			}, 300) : $(".switch-ksclrc").show())
		},
		pause: function() {
			clearInterval(cicleTime);
			$player.removeClass("playing");
			$(".switch-ksclrc").hide();
			$(".switch-down").css("right", "35px");
			$(".switch-default").css("right", "65px");
			hasLrc && wenkmLrc.lrc.hide()
		},
		error: function() {
			clearInterval(cicleTime);
			$player.removeClass("playing");
			wenkmTips.show(NeiCeLists[albumId].song_list[songId].song_title + " - 资源获取失败，播放下一曲！");
			setTimeout(function() {
				wenkmMedia.prev()
			}, 1E3);
			$(".loading,.loading2").hide()
		},
		seeking: function() {
			clearInterval(cicleTime);
			$player.removeClass("playing");
			wenkmTips.show("加载中...")
		},
		volumechange: function() {
			mute ? (wenkmTips.show("静音")) : (a = window.parseInt(100 * audio.volume), $(".volume-on", $player).width(a + "%"), wenkmTips.show("音量：" + a + "%"))
		},
		getInfos: function(a) {
			$cover.removeClass("coverplay");
			$bar.removeClass("animate");
			$songFrom5.hide();
			songId = a;
			id = NeiCeLists[albumId].song_list[songId].song_id;
			mp3url = NeiCeLists[albumId].song_list[songId].mp3url;
			mp3urll = mp3url.replace("http://m", "http://p");
			audio.src = mp3urll;;
			$songFrom5.show();
			$songFrom5.html('<a class="down"><i class="fa fa-cloud-download"  aria-hidden="true" title="从' + songFrom55 + '下载：' + NeiCeLists[albumId].song_list[songId].song_title + ' - ' + NeiCeLists[albumId].song_list[songId].singer + '"></i></a>');
			$(".down").click(function() {
				window.open(audio.src, "newwindow")
			});
			lrcurl = apiurl + "?do=lyric&id=" + id + "&type=" + type + "&ti=" + tips;
			$songName.html("<span title='歌曲：" + NeiCeLists[albumId].song_list[songId].song_title + "'>" + LimitStr(NeiCeLists[albumId].song_list[songId].song_title) + "</span>");
			$songFrom.html("<span title='歌手：" + NeiCeLists[albumId].song_list[songId].singer + "'>" + LimitStr(NeiCeLists[albumId].song_list[songId].singer) + "</span>");
			$songFrom1.html("<span title='专辑：" + NeiCeLists[albumId].song_list[songId].album + "'>" + LimitStr(NeiCeLists[albumId].song_list[songId].album) + "</span>");
			allmusic();
			var c = new Image;
			c.src = NeiCeLists[albumId].song_list[songId].pic;
			$cover.addClass("changing");
			loadblur(c.src);
			c.onload = function() {
				setTimeout(function() {
					$(".loading,.loading2").hide()
				}, 800);
				setTimeout(function() {
					$cover.removeClass("changing")
				}, 100);
				$.ajax({
					url: apiurl,
					type: "GET",
					dataType: "script",
					data: {
						do: 'color',
						url: c.src
					},
					success: function() {
						$(".loading,.loading2").hide();
						playercolor()
					},
					error: function() {
						$(".loading,.loading2").hide();
						playercolor()
					}
				})
			};
			c.error = function() {
				setTimeout(function() {
					$(".loading,.loading2").hide()
				}, 800);
				c.src = ""+ themeurl +"/radio/inc/default.jpg";
				setTimeout(function() {
					wenkmTips.show(NeiCeLists[albumId].song_list[songId].song_title + " - 专辑图片获取失败！")
				}, 4E3)
			};
			$cover.html('<a class="pic" title="查看歌曲封面图"><img src="' + c.src + '"></a>');
			$(".pic").click(function() {
				window.open(c.src, "newwindow")
			});
			audio.volume = volume; - 1 != window.document.cookie.indexOf("player=") ? (wenkmMedia.pause(), $("#wenkmLrc").hide(), setTimeout(function() {
				$(".switch-ksclrc").hide();
				$(".switch-down").css("right", "35px");
				$(".switch-default").css("right", "65px")
			}, 1), setTimeout(function() {
				wenkmTips.show("播放器自动停止播放")
			}, 3E3)) : "NO" != auto ? (wenkmTips.show("开始从" + songFrom55 + "播放：" + NeiCeLists[albumId].song_list[songId].song_title + " - " + NeiCeLists[albumId].song_list[songId].singer), audio.play(), $cover.addClass("coverplay"), $bar.addClass("animate")) : (wenkmMedia.pause(), $("#wenkmLrc").hide(), setTimeout(function() {
				$(".switch-ksclrc").hide();
				$(".switch-down").css("right", "35px");
				$(".switch-default").css("right", "65px")
			}, 1), setTimeout(function() {
				wenkmTips.show("播放器已关闭自动播放")
			}, 3E3));
			wenkmLrc.load();
			RootCookies.SetCookie("player_show", "yes", 1)
		},
		getSongId: function(a) {
			return a >= songTotal ? 0 : 0 > a ? songTotal - 1 : a
		},
		next: function() {
			random ? wenkmMedia.getInfos(window.parseInt(Math.random() * songTotal)) : wenkmMedia.getInfos(wenkmMedia.getSongId(songId + 1))
		},
		prev: function() {
			random ? wenkmMedia.getInfos(window.parseInt(Math.random() * songTotal)) : wenkmMedia.getInfos(wenkmMedia.getSongId(songId - 1))
		}
	},
		wenkmTipsTime = null,
		wenkmTips = {
			show: function(a) {
				clearTimeout(wenkmTipsTime);
				$("#wenkmTips").text(a).addClass("show");
				this.hide()
			},
			hide: function() {
				wenkmTipsTime = setTimeout(function() {
					$("#wenkmTips").removeClass("show");
					0 == musicfirsttip && (musicfirsttip = !0, "open" == welcome && wenkmTips.show(tips))
				}, 4E3)
			}
		};
	random ? ($(".random", $player).removeClass("fa-random"), $(".random", $player).addClass("fa-long-arrow-right"), $(".random", $player).attr("title", "顺序播放"), $songFrom2.html('<i class="random fa fa-random" aria-hidden="true"></i> 随机播放')) : ($(".random", $player).removeClass("fa-long-arrow-right"), $(".random", $player).addClass("fa-random"), $(".random", $player).attr("title", "随机播放"), $songFrom2.html('<i class="random fa fa-long-arrow-right" aria-hidden="true"></i> 顺序播放'));
	audio.addEventListener("play", wenkmMedia.play, !1);
	audio.addEventListener("pause", wenkmMedia.pause, !1);
	audio.addEventListener("ended", wenkmMedia.next, !1);
	audio.addEventListener("playing", wenkmMedia.playing, !1);
	audio.addEventListener("volumechange", wenkmMedia.volumechange, !1);
	audio.addEventListener("error", wenkmMedia.error, !1);
	audio.addEventListener("seeking", wenkmMedia.seeking, !1);
	$play.click(function() {
		$player.toggleClass("show");
		$player.hasClass("show") ? ($play.attr("title", "隐藏播放器")) : ($play.attr("title", "展开播放器"))
	});
	$(function() {
		window.RootCookies = {};
		window.RootCookies.SetCookie = function(a, c, b) {
			var d = new Date;
			d.setTime(d.getTime() + 864E5 * b);
			window.document.cookie = a + "=" + window.escape(c) + (null == b ? "" : ";expires=" + d.toGMTString()) + ";path=/"
		}
	});
	$(".pause", $player).click(function() {
		hasgeci = !1;
		$("li", $albumList).eq(albumId).addClass(cur).find(".artist").html("暂停播放 > ").parent().siblings().removeClass(cur).find(".artist").html("").parent();
		wenkmTips.show("暂停从" + songFrom55 + "播放：" + NeiCeLists[albumId].song_list[songId].song_title + " - " + NeiCeLists[albumId].song_list[songId].singer);
		setTimeout(function() {
			wenkmTips.show("播放器下次访问将停止播放")
		}, 4E3);
		$cover.removeClass("coverplay");
		$bar.removeClass("animate");
		RootCookies.SetCookie("player", "no", 30);
		audio.pause()
	});
	$(".play", $player).click(function() {
		hasgeci = !0;
		RootCookies.SetCookie("player", "no", -1);
		auto = "";
		$("#wenkmLrc").show();
		$("li", $albumList).eq(albumId).addClass(cur).find(".artist").html("当前播放 > ").parent().siblings().removeClass(cur).find(".artist").html("").parent();
		wenkmTips.show("开始从" + songFrom55 + "播放：" + NeiCeLists[albumId].song_list[songId].song_title + " - " + NeiCeLists[albumId].song_list[songId].singer);
		setTimeout(function() {
			wenkmTips.show("播放器下次访问将自动播放")
		}, 4E3);
		$cover.addClass("coverplay");
		$bar.addClass("animate");
		audio.play()
	});
	$(".prev", $player).click(function() {
		RootCookies.SetCookie("player", "no", -1);
		hasgeci = !0;
		auto = "";
		$("#wenkmLrc").show();
		wenkmMedia.prev();
		$(".loading,.loading2").show()
	});
	$(".next", $player).click(function() {
		RootCookies.SetCookie("player", "no", -1);
		hasgeci = !0;
		auto = "";
		$("#wenkmLrc").show();
		wenkmMedia.next();
		$(".loading,.loading2").show()
	});
	$(".random", $player).click(function() {
		random ? ($(".random", $player).removeClass("fa-long-arrow-right"), $(".random", $player).addClass("fa-random"), $(".random", $player).attr("title", "随机播放"), random = 0, wenkmTips.show("顺序播放"), $songFrom2.html('<i class="random fa fa-long-arrow-right" aria-hidden="true"></i> 顺序播放')) : ($(".random", $player).removeClass("fa-random"), $(".random", $player).addClass("fa-long-arrow-right"), $(".random", $player).attr("title", "顺序播放"), random = 1, wenkmTips.show("随机播放"), $songFrom2.html('<i class="random fa fa-random" aria-hidden="true"></i> 随机播放'))
	});
	$(".mute", $player).click(function() {
		mute ? (audio.muted = false, mute = 0, $(this).removeClass(cur)) : (audio.muted = true, mute = 1, $(this).addClass(cur))
	});
	$(".loop", $player).click(function() {
		loop == 0 ? ($(this).addClass(cur), audio.loop = true, loop = 1, wenkmTips.show("单曲循环"), $songFrom2.html('<i class="loop fa fa-retweet" aria-hidden="true"></i> 单曲循环')) : ($(this).removeClass(cur), audio.loop = false, loop = 0, random ? (wenkmTips.show("随机播放"), $songFrom2.html('<i class="random fa fa-random" aria-hidden="true"></i> 随机播放')) : (wenkmTips.show("顺序播放"), $songFrom2.html('<i class="loop fa fa-long-arrow-right" aria-hidden="true"></i> 顺序播放')))
	});
	var $progress = $(".progress", $player);
	$progress.click(function(a) {
		var c = $progress.width(),
			b = $progress.offset().left;
		volume = (a.clientX - b) / c;
		$.cookie("player_volume", volume, {
			path: "/",
			expires: 0
		});
		audio.volume = volume
	});
	$(".volumeup", $player).click(function() {
		audio.volume = 1
	});
	var isDown = !1;
	$(".drag", $progress).mousedown(function() {
		isDown = !0;
		$(".volume-on", $progress).removeClass("ts5")
	});
	$(window).on({
		mousemove: function(a) {
			if (isDown) {
				var c = $progress.width(),
					b = $progress.offset().left;
				a = a.clientX;
				a >= b && a <= b + c && ($(".volume-on", $progress).width((a - b) / c * 100 + "%"), volume = (a - b) / c, audio.volume = volume)
			}
		},
		mouseup: function() {
			isDown = !1;
			$(".volume-on", $progress).addClass("ts5")
		}
	});
	$(".switch-playlist").click(function() {
		$player.toggleClass("showAlbumList")
	});
	$songList.mCustomScrollbar();
	$(".song-list .musicheader,.song-list .fa-angle-right", $player).click(function() {
		$player.removeClass("showSongList")
	});
	$(".switch-ksclrc").click(function() {
		$player.toggleClass("ksclrc");
		$("#wenkmLrc").toggleClass("hide");
		$("#wenkmLrc").hasClass("hide") ? (ycgeci = !1, hasLrc && $songFrom3.html('<i class="fa fa-times-circle" aria-hidden="true"></i> 歌词关闭'), wenkmTips.show("歌词显示已关闭"), songFrom33 = "关闭", $songFrom4.html('<i class="fa fa-toggle-off"  aria-hidden="true" title="打开歌词"></i>')) : (ycgeci = !0, hasLrc && $songFrom3.html('<i class="fa fa-check-circle" aria-hidden="true"></i> 歌词开启'), wenkmTips.show("开启歌词显示"), songFrom33 = "开启", $songFrom4.html('<i class="fa fa-toggle-on"  aria-hidden="true" title="关闭歌词"></i>'))
	});
	$(".switch-default").click(function() {
		songTotal = songId = albumId = id = 0;
		$player.removeClass("showSongList");
		$(".loading,.loading2").show();
		$.ajax({
			url: fileurl,
			type: "GET",
			dataType: "script",
			success: function() {
				wenkmTips.show(NeiCeLists[albumId].song_album + " - 载入成功!");
				$(".switch-default").show();
				hasdefault = !1;
				wenkmPlayer.playList.creat.album();
				$(".play", $player).click()
			},
			error: function(a, c, b) {
				wenkmTips.show("歌曲列表获取失败!");
				$(".switch-default").show()
			}
		})
	});
	$.ajax({
		url: fileurl,
		type: "GET",
		dataType: "script",
		success: function() {
			wenkmPlayer.playList.creat.album()
		},
		error: function(a, c, b) {
			wenkmTips.show("歌曲列表获取失败!")
		}
	});
	wenkmPlayer.newplayList = {
		creat: {
			album: function() {
				var a = NeiCeLists.length,
					c = "";
				$(".musicheader", $albumList).text(name + "(" + a + "歌单来自" + songFrom55 + ")");
				for (var b = 0; b < a; b++) c += '<li title="' + NeiCeLists[b].song_album + " - " + NeiCeLists[b].song_album1 + '"><i class="fa fa-angle-right" aria-hidden="true"></i><span class="index">' + (b + 1) + '</span><span class="artist"></span>' + NeiCeLists[b].song_album + " - " + NeiCeLists[b].song_album1 + "</li>";
				$(".list", $albumList).html("<ul>" + c + "</ul>").mCustomScrollbar();
				$("li", $albumList).click(function() {
					var a = $(this).index();
					$(this).hasClass(cur) ? wenkmPlayer.newplayList.creat.song(a, !0) : wenkmPlayer.newplayList.creat.song(a, !1);
					$player.addClass("showSongList")
				});
				songTotal = NeiCeLists[albumId].song_list.length
			},
			song: function(a, c) {
				songTotal = NeiCeLists[a].song_list.length;
				var b = "";
				$(".song-list .musicheader span", $player).text(NeiCeLists[a].song_album + "(" + songTotal + "首来自" + songFrom55 + ")");
				for (var d = 0; d < songTotal; d++) b += '<li title="' + NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer + '"><span class="index">' + (d + 1) + '</span><span class="artist"></span>' + LimitStr(NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer, 22) + "</li>";
				$("ul", $songList).html(b);
				$songList.attr("data-album", a);
				$songList.mCustomScrollbar("update");
				c ? ($("li", $songList).eq(songId).addClass(cur).siblings().removeClass(cur), $songList.mCustomScrollbar("scrollTo", $("li.current", $songList).position().top - 120)) : $songList.mCustomScrollbar("scrollTo", "top");
				$("li", $songList).click(function() {
					hasgeci = !0;
					auto = "";
					$(".loading,.loading2").show();
					albumId = a;
					$(this).hasClass(cur) ? ($(".loading,.loading2").hide(), wenkmTips.show("正在从" + songFrom55 + "播放：" + NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer)) : (RootCookies.SetCookie("player", "no", -1), $(this).addClass(cur).siblings().removeClass(cur), songId = $(this).index(), wenkmMedia.getInfos(songId))
				})
			}
		}
	};
	wenkmPlayer.playList = {
		creat: {
			album: function() {
				var a = NeiCeLists.length,
					c = "";
				$(".musicheader", $albumList).text(name + "(" + a + "歌单来自" + songFrom55 + ")");
				for (var b = 0; b < a; b++) c += '<li title="' + NeiCeLists[b].song_album + " - " + NeiCeLists[b].song_album1 + '"><i class="fa fa-angle-right" aria-hidden="true"></i><span class="index">' + (b + 1) + '</span><span class="artist"></span>' + NeiCeLists[b].song_album + " - " + NeiCeLists[b].song_album1 + "</li>";
				$(".list", $albumList).html("<ul>" + c + "</ul>").mCustomScrollbar();
				$("li", $albumList).click(function() {
					var a = $(this).index();
					$(this).hasClass(cur) ? wenkmPlayer.playList.creat.song(a, !0) : wenkmPlayer.playList.creat.song(a, !1);
					$player.addClass("showSongList")
				});
				songTotal = NeiCeLists[albumId].song_list.length;
				random ? wenkmMedia.getInfos(window.parseInt(Math.random() * songTotal)) : wenkmMedia.getInfos(wenkmMedia.getSongId(songId))
			},
			song: function(a, c) {
				songTotal = NeiCeLists[a].song_list.length;
				var b = "";
				$(".song-list .musicheader span", $player).text(NeiCeLists[a].song_album + "(" + songTotal + "首来自" + songFrom55 + ")");
				for (var d = 0; d < songTotal; d++) b += '<li title="' + NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer + '"><span class="index">' + (d + 1) + '</span><span class="artist"></span>' + LimitStr(NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer, 22) + "</li>";
				$("ul", $songList).html(b);
				$songList.attr("data-album", a);
				$songList.mCustomScrollbar("update");
				c ? ($("li", $songList).eq(songId).addClass(cur).siblings().removeClass(cur), $songList.mCustomScrollbar("scrollTo", $("li.current", $songList).position().top - 120)) : $songList.mCustomScrollbar("scrollTo", "top");
				$("li", $songList).click(function() {
					hasgeci = !0;
					auto = "";
					$(".loading,.loading2").show();
					albumId = a;
					$(this).hasClass(cur) ? ($(".loading,.loading2").hide(), wenkmTips.show("正在从" + songFrom55 + "播放：" + NeiCeLists[a].song_list[d].song_title + " - " + NeiCeLists[a].song_list[d].singer)) : (RootCookies.SetCookie("player", "no", -1), $(this).addClass(cur).siblings().removeClass(cur), songId = $(this).index(), wenkmMedia.getInfos(songId))
				})
			}
		}
	};
	var hasLrc = !1,
		lrcTimeLine = [],
		lrcHeight = $("#wenkmLrc").height(),
		lrcTime = null,
		letterTime1 = null,
		letterTime2 = null,
		lrcCont = "",
		kscCont = "",
		tempNum1 = 0,
		tempNum2 = 0,
		wenkmLrc = {
			load: function() {
				hasgeci || $("#wenkmLrc").addClass("hide");
				wenkmLrc.lrc.hide();
				hasLrc = !1;
				$("#wenkmLrc").html("");
				$(".switch-ksclrc").hide();
				$(".switch-down").css("right", "35px");
				$(".switch-default").css("right", "65px");
				hasgeci ? $songFrom3.html('<i class="fa fa-check-circle" aria-hidden="true"></i> 歌词' + songFrom33) : $songFrom3.html('<i class="fa fa-times-circle" aria-hidden="true"></i> 歌词' + songFrom33);
				$(".switch-down").css("right", "65px");
				$(".switch-default").css("right", "95px");
				hasdefault ? setTimeout(function() {
					$(".switch-ksclrc").show()
				}, 300) : $(".switch-ksclrc").show();
				$.ajax({
					url: lrcurl,
					type: "GET",
					dataType: "script",
					success: function() {
						0 <= cont.indexOf("[00") ? setTimeout(function() {
							songFrom44 = $("#wenkmLrc").hasClass("hide") ? " - 歌词已关闭！" : " - 歌词获取成功!";
							wenkmLrc.lrc.format(cont)
						}, 500) : (songFrom44 = " - 暂无歌词!", $songFrom3.html('<i class="fa fa-times-circle" aria-hidden="true"></i> 暂无歌词'), $(".switch-ksclrc").hide(), $(".switch-down").css("right", "35px"), $(".switch-default").css("right", "65px"))
					}
				})
			},
			lrc: {
				format: function(a) {
					function c(a) {
						var b = a.split(":");
						a = +b[0];
						var c = +b[1].split(".")[0],
							b = +b[1].split(".")[1];
						return 60 * a + c + Math.round(b / 1E3)
					}
					hasLrc = !0;
					a = a.replace(/\[[A-Za-z]+:(.*?)]/g, "").split(/[\]\[]/g);
					var b = "";
					lrcTimeLine = [];
					for (var d = 1; d < a.length; d += 2) {
						var e = c(a[d]);
						lrcTimeLine.push(e);
						b = 1 == d ? b + ('<li class="wenkmLrc' + e + ' current">' + a[d + 1].replace("\n", "") + "</li>") : b + ('<li class="wenkmLrc' + e + '">' + a[d + 1].replace("\n", "") + "</li>")
					}
					$("#wenkmLrc").html("<ul>" + b + "</ul>");
					setTimeout(function() {
						$("#wenkmLrc").addClass("show")
					}, 500);
					lrcTime = setInterval(wenkmLrc.lrc.play, 500)
				},
				play: function() {
					var a = Math.round(audio.currentTime);
					0 < $.inArray(a, lrcTimeLine) ? (a = $(".wenkmLrc" + a), a.hasClass(cur) || (a.addClass(cur).siblings().removeClass(cur), $("#wenkmLrc").animate({
						scrollTop: lrcHeight * a.index()
					}))) : Cont = ""
				},
				hide: function() {
					clearInterval(lrcTime);
					$("#wenkmLrc").removeClass("show")
				}
			}
		}
}
function LimitStr(a, c, b) {
	c = c || 6;
	b = b || "...";
	for (var d = "", e = a.length, f = 0, g = 0; f < 2 * c && g < e; g++) f += 128 < a.charCodeAt(g) ? 2 : 1, d += a.charAt(g);
	g < e && (d += b);
	return d
}
function loadblur(a) {
	var c = "",
		b = $(".blur"),
		d = new Image;
	d.onload = function() {
		if (a == c) {
			var d = b.clone();
			b.parent().append(d.css({
				display: "none",
				top: -b.height() - 3 + "px"
			}).attr("src", a));
			d.fadeIn(1E3, function() {
				d.css("top", "0px");
				b.remove();
				b = d
			})
		}
	};
	c = d.src = a
}
function allmusic() {
	$("li", $albumList).eq(albumId).addClass(cur).find(".artist").html("当前播放>").parent().siblings().removeClass(cur).find(".artist").html("").parent();
	"" == !$("ul", $songList).html() && $("[data-album=" + albumId + "]").length && ($("[data-album=" + albumId + "]").find("li").eq(songId).addClass(cur).siblings().removeClass(cur), $songList.mCustomScrollbar("scrollTo", $("li.current", $songList).position().top - 120))
}
function playercolor() {
	$player.css({
		background: "rgba(" + ccont + ",.8)"
	});
	$player.css({
		color: "rgb(" + ccont1 + ")"
	});
	$play.css({
		background: "rgba(" + ccont + ",.8)"
	});
	$lrc.css({
		background: "rgba(" + ccont + ",.8)"
	});
	$lrc.css({
		color: "rgb(" + ccont1 + ")"
	});
	$tips.css({
		background: "rgba(" + ccont + ",.8)"
	});
	$tips.css({
		color: "rgb(" + ccont1 + ")"
	})
}
function music(a, c) {
	$("#wenkmLrc").show();
	albumId = a - 1;
	$player.removeClass("showSongList");
	$(".loading,.loading2").show();
	$.ajax({
		url: fileurl,
		type: "GET",
		dataType: "script",
		success: function() {
			$(".switch-default").show();
			hasdefault = !1;
			wenkmPlayer.newplayList.creat.album();
			wenkmMedia.getInfos(c - 1);
			$(".play", $player).click()
		},
		error: function(a, c, e) {
			wenkmTips.show("歌曲列表获取失败!");
			$(".switch-default").show()
		}
	})
}
$(window.document).ready(function() {
	$(window).keydown(function(a) {
		192 == a.keyCode && (auto = "", audio.paused ? $(".play", $player).click() : $(".pause", $player).click())
	})
});
$(window).scroll(function() {
	var a = $(this).scrollTop(),
		c = $(window.document).height(),
		b = $(this).height();
	a + b == c ? hasgeci && ycgeci && ($player.addClass("ksclrc"), $("#wenkmLrc").addClass("hide"), $songFrom3.html('<i class="fa fa-times-circle" aria-hidden="true"></i> 歌词隐藏'), $songFrom4.html('<i class="fa fa-toggle-off"  aria-hidden="true" title="歌词隐藏"></i>'), hasLrc && wenkmTips.show("歌词自动隐藏")) : ($player.hasClass("ksclrc")) && hasgeci && ycgeci && ($player.removeClass("ksclrc"), $("#wenkmLrc").removeClass("hide"), hasLrc && $songFrom3.html('<i class="fa fa-check-circle" aria-hidden="true"></i> 歌词开启'), $songFrom4.html('<i class="fa fa-toggle-on"  aria-hidden="true" title="关闭歌词"></i>'), wenkmTips.show("歌词开启"))
});