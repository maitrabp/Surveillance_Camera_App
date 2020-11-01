import React from "react";
import ReactDOM from "react-dom";
import { createContext, useReducer } from "react";
import RecordReducer from "../RecordReducer";

const initialState = {
    videos: [
    ],
  };
  

export const RecordContext = createContext(initialState);
export const RecordProvider = ({children}) => {
  const [state, dispatch] = useReducer(RecordReducer, initialState)
  function addVideo(videos) {
    dispatch({
      type: "ADD_VIDEO",
      payload: videos
    });
  }

  return (
    <RecordContext.Provider
      value={{
        videos: state.videos,
        addVideo,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};