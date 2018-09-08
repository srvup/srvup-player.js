import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import styles from './styles.css'


class Player extends Component {
  constructor (props) {
    super(props)
    this.video = React.createRef()
    this.state = {
      playing: false
    }
  }

  static propTypes = {
    url: PropTypes.string
  }

  onPlaying = (event) =>{
    // video is played
    this.setState({playing: true})
    if (this.props.onPlaying){
       this.props.onPlaying(event)
    }
   
  }
  onPause = (event) =>{
    // video was paused
    this.setState({playing: false})
    if (this.props.onPause){
       this.props.onPause(event)
    }
  }

  onProgress = (event) => {
    // download progress
    if (this.props.onProgress){
       this.props.onProgress(event)
    }
  }

  onTimeUpdate = (event) => {
    // video player's current time has changed.
    if (this.props.onTimeUpdate){
      this.props.onTimeUpdate(event)
    }
    if (this.props.currentTime) {
      this.props.currentTime(this.getCurrentTime())
    }
  }

  getDuration = _ => {
    return this.video.current.duration
  }
  getCurrentTime = _ => {
    return this.video.current.currentTime
  }

  toggle = (event) => {
    this.setState({
      playing: !this.state.playing
    })
  }
  handleMenuClick = (e, data) => {
    // console.log('menu')
    window.open(
        'https://www.srvup.com',
        '_blank'
      );
  }
  handleClick = (event) => {
    this.toggle()
  }

  onLoadedMetadata = (event) => {
    // return video details, when available
    if (this.props.videoDetails) {
      let videoDetails = {
          currentTime: this.getCurrentTime(),
          duration: this.getDuration()
      }
      this.props.videoDetails(videoDetails)
    }
  }

  render() {
    const {
      url,
      hideControls,
      poster
    } = this.props
    const {
      playing
    } = this.state

    const showControls = !hideControls || true
    return (
      <div className=''>
       {url &&
         <div className={styles['srvup-player']}>
          <ContextMenuTrigger id="loaded_srvup_player" >
            <ContextMenu id="loaded_srvup_player" onShow={this.onPause} >
                <MenuItem  onClick={this.handleMenuClick}>
                 Srvup.com
              </MenuItem>
            </ContextMenu>
              
             <video 
               controls={showControls} 
               src={url} 
               poster={poster}
               ref = {this.video}
               controlsList="nodownload" 
               onPlaying={this.onPlaying}
               onPause={this.onPause}
               onProgress={this.onProgress}
               onClick={this.handleClick}
               onTimeUpdate={this.onTimeUpdate}
               onLoadedMetadata={this.onLoadedMetadata}
               >
               



               </video>
        </ContextMenuTrigger>

          

        
       </div>
       }
      </div>
    )
  }
}

export default Player
