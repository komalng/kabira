// https://developers.google.com/youtube/iframe_api_reference

var player, timer, video_id;

backToThumbs = () => {
  $('.card iframe').each((index, value) => {
    var v_id = value.id;
    var new_html = `<div style="position: relative;" id="` + v_id + `">
        <div onclick="playVideoCustom('`+ v_id + `')">
          <img class="card-img-top img-fluid" src="https://img.youtube.com/vi/`+ v_id + `/mqdefault.jpg">
          <img src="assets/img/playicon.png" class="playicon" />
        </div>
      </div>` + $('#' + v_id).parent().children(":nth-child(2)")[0].outerHTML;
    $('#' + v_id).parent().html(new_html);
  });
}

playVideoCustom = (vid) => {

  backToThumbs();

  video_id = vid;
  player = new YT.Player(video_id, {
    height: $('#'+vid).height(),
    width: $('#'+vid).width(),
    videoId: video_id,
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,
      autohide: 1,
      host: `${window.location.protocol}//www.youtube.com`
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// myTimer = (target) => {
  // target.playVideo();
// }

function onPlayerReady (event) {
  event.target.setVolume(100);
  timer = setInterval(function(){console.log(event.target); event.target.playVideo();}, 2000);
}

onPlayerStateChange = (event) => {
  if (event.data == YT.PlayerState.PLAYING) {
    clearInterval(timer);
  };

  if (event.data == YT.PlayerState.ENDED) {
    if ($('#' + video_id).parent().next().html()) {
      video_id = $('#' + video_id).parent().next().children(":first").attr('id');
    } else {
      video_id = $('#Cnm7NQTtFag').parent().parent().children(":first").children(":first").attr('id');
    }
    playVideoCustom(video_id)
  }
}