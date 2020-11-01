import React, {useContext} from 'react'
import {RecordContext} from './context/RecordState'
function Recordings() {
    const {videos} = useContext(RecordContext);
    console.log(videos)
    return (
        <div className="row p-3 h-70">
          <h5 className="display-6 d-flex justify-content-center" style={{width:"100%"}}>Records:</h5>
          <hr/>
          {!videos.length
            ? null
            : videos.map((video) => {
              return (
                <div className="card mt-3 w-100" key={video.title}>
                  <div className="card-body">
                    <h6 className="card-title">{video.title}</h6>
                    <div className="embed-responsive embed-responsive-21by9 border border-white">
                      <video className= "embed-responsive-item" controls src={video.href}></video>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
    )
}

export default Recordings
