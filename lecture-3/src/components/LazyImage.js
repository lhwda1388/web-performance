/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from "react";

function LazyImage(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const previousSibling = target.previousSibling;
          console.log("isIntersecting");
          // 이미지 레이지 로딩 처리
          target.src = target.dataset.src;
          if (previousSibling)
            previousSibling.srcset = previousSibling.dataset.srcset;

          observer.unobserve(target);
        }
      });
    };

    const options = {};
    const observer = new IntersectionObserver(callback, options);
    // ㅇㅣ미지 객체를 감시 해서 레이지 로딩 해준다.
    observer.observe(imgRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <picture>
      {props.webp && <source data-srcset={props.webp} type="image/webp" />}
      <img {...props} src={undefined} data-src={props.src} ref={imgRef} />
    </picture>
  );
}

export default LazyImage;
