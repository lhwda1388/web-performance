import React, { useRef, useEffect } from "react";

function LazyImage(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("isIntersecting");
          // 이미지 레이지 로딩 처리
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
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
  return <img {...props} src={undefined} data-src={props.src} ref={imgRef} />;
}

export default LazyImage;
