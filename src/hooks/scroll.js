// import React, { useRef, useEffect } from "react";

// export const useScroll = (childRef, callback) => {
//   const observer = useRef();

//   useEffect(() => {
//     const options = {
//       root: document.querySelector("#root"),
//       rootMargin: "0px",
//       threshold: 0,
//     };
//     observer.current = new IntersectionObserver(([target]) => {
//       if (target.isIntersecting) {
//         console.log("intersected");
//         callback();
//       }
//     }, options);

//     observer.current.observe(childRef.current);

//     return function () {
//       observer.current.unobserve(childRef.current);
//     };
//   }, [callback]);
// };
