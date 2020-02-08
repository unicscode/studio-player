# studio-player

> react video player

[![NPM](https://img.shields.io/npm/v/studio-player.svg)](https://www.npmjs.com/package/studio-player) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```bash
npm install --save studio-player
```

## Demo

https://aksildoescode.github.io/studio-player/

## Usage

```jsx
import React, { useState } from "react";
import StudioPlayer from "studio-player";

// import css from from video-js dependecy
import "video.js/dist/video-js.css";

const StudioApp = () => {
  player = {};

  const [state, setstate] = useState({
    video: {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      poster:
        "https://www.publicdomainpictures.net/pictures/160000/velka/vagues-et-ocean-1457216768S53.jpg"
    }
  });

  function onPlayerReady(player) {
    console.log("Player is ready: ", player);
    this.player = player;
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
      <StudioPlayer
        controls={true}
        src={state.video.src}
        poster={state.video.poster}
        width="720"
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
```

## Ajusting Size

To set the size of the player you can pass width and heigh property. `width="720`
to make the player responsive pass set className to `vjs-fluid` `className="vjs-fluid"`
you can also pass the ration of video by adding classNames `vjs-16-9`, or `vjs-4-3`

## License

MIT © [aksildoescode](https://github.com/aksildoescode)
