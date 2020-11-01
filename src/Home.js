import React, { useRef, useEffect, useContext } from "react";
import { RecordContext } from "./context/RecordState";
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "./App.css";
import { getRetinaContext } from './DrawingUtilities/canvas'
import { renderPredictions } from "./DrawingUtilities/renderpredictions";
function Home(props) {
    const videoElement = useRef(null);
    const canvasElement = useRef(null);
    const startButtonElement = useRef(null);
    const stopButtonElement = useRef(null);
    const modelRef = useRef(null);
    const lastDetectionRef = useRef([]);
    const recorderRef = useRef(null);
    const shouldRecordRef = useRef(false);
    const isRecordingRef = useRef(false);
    const {addVideo} = useContext(RecordContext);
    //when the page renders, you wanna do this
    useEffect(() => {
      async function prepare() {
        startButtonElement.current.setAttribute("disabled", true);
        stopButtonElement.current.setAttribute("disabled", true);
        //Loading screen until the stream starts
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 

        //If camera detected, then
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          //get the cam, make sure audio and video are enabled
          try {
            //on iphones it defaults to front camera, to change it google
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: {
                width: { ideal: 4096 },
                height: { ideal: 2160 } 
              }
            });
            //put the stream on our window stream
            window.stream = stream;
            videoElement.current.srcObject = stream;
  
            //TODO LOAD THE MODEL FROM COCO & assign
            const model = await cocoSSD.load();
            modelRef.current = model;
  
            //starts so not disabeld
            startButtonElement.current.removeAttribute("disabled");

            //Show screen once the start button is displayed
            document.querySelector( 
              "#loader").style.display = "none"; 
            document.querySelector( 
              "body").style.visibility = "visible"; 

          } catch (error) {
            console.error(error);
          }
        }
      }
      prepare();
    }, []);
    async function detectFrame() {
      //when should recordref value changes to false, we wanna stop recording (because frame runs recursively)
      if (!shouldRecordRef.current) {
        stopRecording();
        return;
      }
  
      //Predictions will be of the objects detected within our frame
      const predictions = await modelRef.current.detect(videoElement.current);
      let foundperson = false;
      
      const wantedWidth = videoElement.current.offsetWidth
      const wantedHeight = videoElement.current.offsetHeight
      const videoWidth = videoElement.current.videoWidth
      const videoHeight = videoElement.current.videoHeight

      const scaleX = wantedWidth / videoWidth
      const scaleY = wantedHeight / videoHeight

      let scale
      scale = Math.max(scaleX, scaleY)

      const xOffset = (wantedWidth - videoWidth * scale) / 2
      const yOffset = (wantedHeight - videoHeight * scale) / 2

      const ctx = getRetinaContext(canvasElement.current)
      ctx.setWidth(wantedWidth)
      ctx.setHeight(wantedHeight)
      ctx.clearAll()

      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i].class == "person") {
          console.log(JSON.stringify(predictions[i]));
          foundperson = true;
        }
      }
      // Update predictions to match canvas.
      const offsetPredictions = predictions.map((prediction) => {
        if(prediction.class == "person") {
          let x = prediction.bbox[0] * scale + xOffset
          const y = prediction.bbox[1] * scale + yOffset
          const width = prediction.bbox[2] * scale
          const height = prediction.bbox[3] * scale

          return { ...prediction, bbox: [x, y, width, height] }
        }
        else {
          return{...[], bbox: [0, 0, 0, 0]}
        }
      })
      const renderFunction = renderPredictions

      renderFunction(ctx, offsetPredictions)
  
      if (foundperson) {
        startRecording();
        lastDetectionRef.current.push(true);
      } else if (lastDetectionRef.current.filter(Boolean).length) { //cont.. recording because there was one true before, maybe we lost couple frame so we do not detect a person.
        startRecording();
        lastDetectionRef.current.push(false)
      }
      else { //no objs within last ten frames stop recording
        stopRecording();
      }
  
      //leave ten most recent frames
      lastDetectionRef.current = lastDetectionRef.current.slice(
        Math.max(lastDetectionRef.current.length - 10, 0)
      )
      requestAnimationFrame(() => {
        detectFrame();
      });
    }
    function startRecording() {
      //If already started recording, then get out of this func
      if (isRecordingRef.current) {
        return;
      }
      //else start
      isRecordingRef.current = true;

      console.log("start recording");
      props.changeStreamStatus(true); 
      recorderRef.current = new MediaRecorder(window.stream);
  
      recorderRef.current.ondataavailable = function (e) {
        const title = new Date() + "";
        const href = URL.createObjectURL(e.data);
        const videos = {href: href, title: title};
        //add video to the context, use it from the context in other components
        addVideo(videos);
      };
      recorderRef.current.start();
    };
  
    function stopRecording() {
      //If already stopped recording, then get out of this func
      if (!isRecordingRef.current) {
        return;
      }
      //else stop
      isRecordingRef.current = false;
      props.changeStreamStatus(false); 
      recorderRef.current.stop();
      console.log("Stopped recording");
      lastDetectionRef.current = []
    }
    return (
    <div className="p-3" style={{maxHeight:"50%"}}>
      <h6 className="d-flex justify-content-center text-info" style={{width:"100%"}}><b>Surveillance Camera</b></h6>
      <p className="d-flex justify-content-center" style={{width:"100%"}}>Note: Make sure the lighting is good before you start recording. Once you press start, the application keeps track of movement and stores them as video feeds.</p>
        <div id="videoOutline" className="embed-responsive embed-responsive-21by9 border border-white">
          <video className= "embed-responsive-item" style={{objectFit:"cover"}}autoPlay playsInline muted ref={videoElement} />
          <canvas className= "embed-responsive-item" ref={canvasElement} />
        </div>
        <div className = "d-flex justify-content-center border border-white">
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group m-1" role="group">
              <button
                className="btn btn-outline-white btn-block"
                onClick={() => {
                  shouldRecordRef.current = true;
                  stopButtonElement.current.removeAttribute("disabled");
                  startButtonElement.current.setAttribute("disabled", true);
                  detectFrame();
                }}
                ref={startButtonElement}
              >
                Start
              </button>
            </div>
            <div className="btn-group m-1" role="group">
              <button
                className="btn btn-outline-white btn-block"
                onClick={() => {
                  shouldRecordRef.current = false;
                  startButtonElement.current.removeAttribute("disabled");
                  stopButtonElement.current.setAttribute("disabled", true);
                  stopRecording();
                }}
                ref={stopButtonElement}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home
