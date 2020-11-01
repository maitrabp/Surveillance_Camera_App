import React from "react";

export default (state, action) => {
    switch (action.type) {
      case "ADD_VIDEO":
        state.videos.push({
            ...action.payload,
        })
        return {
          ...state,
          videos: [...state.videos],
        }
      default:
        return {
            ...state,
          };
    }
  };