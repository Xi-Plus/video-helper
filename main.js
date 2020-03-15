javascript: (function() {

	if (window.video_helper_loaded) {
		return;
	}
	window.video_helper_loaded = true;

	function ani_gamer_com_tw() {
		document.addEventListener('keyup', function(e) {
			if (e.altKey) {
				if (e.which == 90) { // Z 進度條
					if ($('.vjs-control-bar').is(':hidden')) {
						$('.vjs-big-play-button').show();
						$('.vjs-control-bar').show();
						$('.control-bar-mask').show();
					} else {
						$('.vjs-big-play-button').hide();
						$('.vjs-control-bar').hide();
						$('.control-bar-mask').hide();
					}
				} else if (e.which == 88) { // X 彈幕
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

	function i_animeone_me() {
		document.addEventListener('keyup', function(e) {
			if (e.altKey) {
				if (e.which == 90) { // Z 進度條
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
				if (e.which == 90) { // Z 進度條
					if (document.getElementsByClassName('jw-controlbar')[0].style.display !== 'none') {
						document.getElementsByClassName('jw-controlbar')[0].style.display = 'none';
					} else {
						document.getElementsByClassName('jw-controlbar')[0].style.display = '';
					}
				}
			}
		});
	}

	function main() {
		switch (window.location.host) {
			case 'ani.gamer.com.tw': ani_gamer_com_tw(); break;
			case 'anime1.me': anime1_me(); break;
			case 'i.animeone.me': i_animeone_me(); break;
			case 'v.anime1.me': v_anime1_me(); break;
			default:
				alert('Not supported site.');
		}
	}

	main();

})();
