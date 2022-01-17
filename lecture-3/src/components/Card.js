import React, { useRef, useEffect } from "react";
import LazyImage from "./LazyImage";

function Card(props) {
  return (
    <div className="Card text-center">
      <LazyImage src={props.image} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
