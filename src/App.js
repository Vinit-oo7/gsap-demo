import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function App() {
  const boxRef = useRef(null);

useEffect(() => {
let tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
  tl.from(boxRef.current, { opacity: 0, scale: 0.5, duration: 1 ,borderRadius:100})
    .to(boxRef.current, { x: 300, duration: 1 ,opacity:1})
    .to(boxRef.current, { rotation: 360, duration: 1,scale:1,opacity:0,borderRadius:0});
}, []);


  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        borderRadius:0,
        background: "teal",
        margin: 50
      }}
    ></div>
  );
}

