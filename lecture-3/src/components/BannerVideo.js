import React from "react";
import video from "../assets/banner-video.mp4";
// 이미지 압축 , webm
// 비디오 런닝타임을 짧게 줄여 연결 혹은 비디오 위에 블러처리등의 필터처리를 해서 비디오 화질 저하를 눈치 못채게 할수도 있음.
// 비디오를 사용하는 사이트의 중요도에 따라 비디오 퀄리티에 대한 조정은 고려 필요.
function BannerVideo() {
  return (
    <div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
      <div className="absolute h-screen w-full left-1/2">
        <video
          className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-white text-center">
          <div className="text-6xl leading-none font-semibold">KEEP</div>
          <div className="text-6xl leading-none font-semibold">CALM</div>
          <div className="text-3xl leading-loose">AND</div>
          <div className="text-6xl leading-none font-semibold">RIDE</div>
          <div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
        </div>
      </div>
    </div>
  );
}

export default BannerVideo;
