import React from "react";

const Videofinal = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <video
        src="/final_2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-3xl rounded-lg shadow-lg"
      >
        Tu navegador no soporta el video.
      </video>
    </div>
  );
};

export default Videofinal;

