"use client";

import React from "react";
import ReactPlayer from "react-player";

interface YoutubePlayerProps {
  url: string;
}

export default function YoutubePlayer({ url }: YoutubePlayerProps) {
  return (
    <div className="relative pt-[56.25%] w-full bg-black rounded-xl overflow-hidden shadow-lg">
      <ReactPlayer
        src={url}
        config={{
          youtube: {
            color: "white",
          },
        }}
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        controls={true}
        pip={true}
      />
    </div>
  );
}
