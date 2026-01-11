javascript: (function() {

	if (window.video_helper_loaded) {
		return;
	}
	window.video_helper_loaded = true;

	function video_callback(e) {
		if (e.target.getElementsByTagName('video').length === 1) {
			var video = e.target.getElementsByTagName('video')[0];
			if (e.altKey) {
				if (e.key == 'ArrowRight') {
					e.preventDefault();
					video.currentTime += 80;
				} else if (e.key == 'ArrowLeft') {
					e.preventDefault();
					video.currentTime -= 80;
				}
			}
		}
	}

	function ani_gamer_com_tw() {
		document.addEventListener('keydown', function(e) {
			if (e.altKey) {
				if (e.key == 'z') { /* Z 進度條 */
					if ($('.vjs-control-bar').is(':hidden')) {
						$('.vjs-big-play-button').show();
						$('.vjs-control-bar').show();
						$('.control-bar-mask').show();
						$('.top-tool-bar').show();
					} else {
						$('.vjs-big-play-button').hide();
						$('.vjs-control-bar').hide();
						$('.control-bar-mask').hide();
						$('.top-tool-bar').hide();
					}
				} else if (e.key == 'x') { /* X 彈幕 */
					$('#danmuToggle').click();
				}
			}
		});
	}

	function anime1_me() {
		$('article').each(function(i, e) {
			var url = $(e).find('iframe').attr('src');
			if (!url) {
				return;
			}
			var target = $(e).find('.entry-meta');
			$('<a>').attr('href', url).attr('target', '_blank').text('Video link').appendTo(target);
		});
	}

	function fenglin_tv() {
		var framedoc = document.getElementsByName('momoplayer')[0].contentDocument;
		framedoc.addEventListener('keyup', function(e) {
			if (e.altKey) {
				if (e.which == 90) { /* Z 進度條 */
					if (framedoc.getElementsByClassName('jw-controls')[0].style.display !== 'none') {
						framedoc.getElementsByClassName('jw-controls')[0].style.display = 'none';
						framedoc.getElementsByClassName('jw-controls-backdrop')[0].style.display = 'none';
					} else {
						framedoc.getElementsByClassName('jw-controls')[0].style.display = '';
						framedoc.getElementsByClassName('jw-controls-backdrop')[0].style.display = '';
					}
				}
			}
		});
	}

	function i_animeone_me() {
		document.addEventListener('keyup', function(e) {
			if (e.altKey) {
				if (e.which == 90) { /* Z 進度條 */
					if (document.getElementsByClassName('vjs-control-bar')[0].style.display !== 'none') {
						document.getElementsByClassName('vjs-control-bar')[0].style.display = 'none';
					} else {
						document.getElementsByClassName('vjs-control-bar')[0].style.display = '';
					}
				}
			}
		});
	}

	function v_anime1_me() {
		document.addEventListener('keyup', function(e) {
			if (e.altKey) {
				if (e.which == 90) { /* Z 進度條 */
					if (document.getElementsByClassName('jw-controlbar')[0].style.display !== 'none') {
						document.getElementsByClassName('jw-controlbar')[0].style.display = 'none';
					} else {
						document.getElementsByClassName('jw-controlbar')[0].style.display = '';
					}
				}
			}
		});
	}

	function youtube() {
		if (location.href.includes('www.youtube.com/shorts/')) {
			document.location = location.href.replace('www.youtube.com/shorts/', 'www.youtube.com/watch/');
		}
		for (let link of document.querySelectorAll('a')) {
			let m = link.href.match(/^https:\/\/www.youtube.com\/shorts\/(.+)$/, link.href);
			if (m) {
				link.href = 'https://www.youtube.com/watch?v=' + m[1];
			}
		}
	}

	function main() {
		switch (window.location.host) {
			case 'ani.gamer.com.tw': ani_gamer_com_tw(); break;
			case 'anime1.me': anime1_me(); break;
			case 'fenglin.tv': fenglin_tv(); break;
			case 'i.animeone.me': i_animeone_me(); break;
			case 'v.anime1.me': v_anime1_me(); break;
			case 'www.youtube.com': youtube(); break;
			default:
				alert('Not supported site.');
				return;
		}

		document.addEventListener('keydown', video_callback);
	}

	main();

})();
