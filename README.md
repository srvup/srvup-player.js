# srvup-player

> srvup-player for audio and video

[![NPM](https://img.shields.io/npm/v/srvup-player.svg)](https://www.npmjs.com/package/srvup-player) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save srvup-player
```

## Usage

```jsx
import React, { Component } from 'react'

import Player from 'srvup-player'

 
export default class App extends Component {
    handleCurrentTime = (currentTime) => {
        console.log(currentTime)
    }
    videoDetails = (data) => {
        console.log(data)
    }
  render () {
    return (
      <div>
        <Player 
            url='<yourvideo>' 
            poster='<yourposter>'
            currentTime={this.handleCurrentTime}
            videoDetails={this.videoDetails}
            />
      </div>
    )
  }
}

```

## License

MIT © [srvup](https://github.com/srvup)
