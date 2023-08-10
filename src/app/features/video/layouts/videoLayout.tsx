import React from "react";
import { CommentsCanvas, DrawCanvas, Video } from "..";
import { VideoContextProvider } from "../stores/videoContext";

const VideoLayout = () => {
  return (
    <main>
      <Video
      // className src
      />
      <canvas>
        {/* {context details: videourl ,commentsData, canvas active, drawing detail } */}
        <VideoContextProvider>
          <CommentsCanvas commentsData={{ id: 123123 }} />
          <DrawCanvas />
        </VideoContextProvider>
      </canvas>
    </main>
  );
};

export default VideoLayout;
