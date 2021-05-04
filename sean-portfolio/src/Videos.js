import React from 'react'
import ReactPlayer from 'react-player'
import './Videos.css'

function Videos() {
    return (
        <div className='wrapper'>
            <div className='bio-name'>
                <h3 className='namebio'>Sean Cortese</h3>
            </div>
            <div className='section parallax bg1'>
                <h1 className='bio-text'>Videos</h1>  
            </div>
            <div className='static'>
                <p className='bio-para'>About me and paragraph info</p>
                <div className='videos-div'>
                <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=zg3Od09xS-s"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=kHLvAXbDriM"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQaKtMkgP5I&t=5s"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=1pAGezmL-mM"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=QU347A41RHw"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nr5EyM4bZ7U"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>


                </div>

            </div>
            
        </div>
    )
}

export default Videos
