import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Parallax = ({className, children, speed=1, id="paralax"}) => {
    const trigger = useRef();
    const target = useRef();
    const timeline = useRef();
    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const y = windowWidth * speed * 0.1;
        const setY = gsap.quickSetter(target.current, "y", "px");
    
        timeline.current = gsap.timeline({
          scrollTrigger: {
            id: id,
            trigger: trigger.current,
            scrub: true, 
            start: "top bottom",  
            end: "bottom top", 
            onUpdate: (e) => {
              setY(e.progress * y);
            },
          },
        });
    
        return () => {
          timeline?.current?.kill(); 
        };
      }, [id, speed, windowWidth]);

    return (
        <div ref={trigger} className={className}>
            <div ref={target}>
                {children}
            </div>
        </div>
    )
}

export default Parallax;