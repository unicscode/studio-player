import React, { useState } from "react";
import Player from "studio-player";

// import css from from video-js dependecy
import "video.js/dist/video-js.css";

const StudioApp = () => {
  const Myplayer = {};

  const [state, setstate] = useState({
    video: {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      poster:
        "https://www.publicdomainpictures.net/pictures/160000/velka/vagues-et-ocean-1457216768S53.jpg"
    }
  });

  function onPlayerReady(player) {
    console.log("Player is ready: ", player);
    player = Myplayer;
  }

  function onVideoPlay(duration) {
    console.log("Video played at: ", duration);
  }

  function onVideoPause(duration) {
    console.log("Video paused at: ", duration);
  }

  function onVideoTimeUpdate(duration) {
    console.log("Time updated: ", duration);
  }

  function onVideoSeeking(duration) {
    console.log("Video seeking: ", duration);
  }

  function onVideoSeeked(from, to) {
    console.log(`Video seeked from ${from} to ${to}`);
  }

  function onVideoEnd() {
    console.log("Video ended");
  }

  return (
    <div>
      <Player
        controls={true}
        src={state.video.src}
        poster={state.video.poster}
        width="650"
        height="420"
        onReady={onPlayerReady}
        onPlay={onVideoPlay}
        onPause={onVideoPause}
        onTimeUpdate={onVideoTimeUpdate}
        onSeeking={onVideoSeeking}
        onSeeked={onVideoSeeked}
        onEnd={onVideoEnd}
      />
    </div>
  );
};
export default StudioApp;
