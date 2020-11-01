import React, {useContext, useState} from "react";
import {HashRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import { RecordContext } from "./context/RecordState";
import Recordings from "./Recordings";
import Home from "./Home"
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import {RecordProvider} from "./context/RecordState";
import "./App.css";

const App = () => {

/*   const subIncrementStyles = {
    borderRadius: "50%",
    width: "1rem",
    height: "1rem",
    marginTop: "100%",
    padding: "0.1rem",
    paddingLeft: "0px",
    marginLeft: "0px",
    background: "#DC143C",
    color: "white",
    textAlign: "center",
    font: "0.7rem Arial, sans-serif"
  } */

  const {videos} = useContext(RecordContext);
  //Use state re-renders this component which is our Nav bar only :)
  const [streamRef, setStreamStatus] = useState(false);

  function changeStreamStatus(streamCheck) {
    setStreamStatus(streamCheck)
  }
  return (

    <HashRouter basename = "/">
        <RecordProvider>
        <div>
          <nav class="navbar navbar-expand-sm fixed-bottom navbar-info bg-dark border border-white" data-toggle="affix">
                  <div class="d-flex flex-row justify-content-md-center" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                      <Link class="nav-link text-white" style={{label:{flexDirection: "column"}}} to="/"><PersonalVideoIcon fontSize="large"/> Camera</Link>
                      {!streamRef && <Link class="nav-link text-white" style={{label:{flexDirection: "column"}}} to="/detectedRecords"><SlideshowIcon fontSize="large" style={{marginRight: "0px"}}/> Records</Link>}
                  </div>
          </nav>
          <Switch>
          <Route
              exact path='/'
              render={(props) => (
              <Home {...props} changeStreamStatus={changeStreamStatus} />
            )}
          />
              <Route exact path='/detectedRecords' component={Recordings}/>
          </Switch>
        </div>
        </RecordProvider>
    </HashRouter>

  );
};
export default App;