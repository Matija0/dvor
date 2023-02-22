import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power3, Power2 } from 'gsap';

import { useRef, useEffect, useLayoutEffect } from 'react';

const ImageComponent = ({
  width,
  image,
  index,
  rounded,
  height,
  portofolioRounded,
}) => {
  const h1Ref = useRef();
  const img = useRef();
  const reveal = useRef();
  const ref = useRef([]);
  ref.current = [];
  const addToRefs = (el) => {
    if (!ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
  
    }

    ref.current.forEach((container) => {
      let image = img.current;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset',
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.easeInOut,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.1,
        delay: -1.5,
        ease: Power2.easeInOut,
      });
    });
  }, []);
  return (
    <div
      className='gsap-image-container bg-transparent'
      style={{ maxWidth: width }}>
      <div
        key={index}
        className={rounded ? 'reveal bg-transparent' : 'reveal'}
        ref={addToRefs}>
        <img
          style={{
            height: height,
          
          }}
          className={
            rounded
              ? 'rounded-full '
              : '' || portofolioRounded
              ? 'portofolio-round'
              : ''
          }
          ref={img}
          src={image}
        />
      </div>
    </div>
  );
};
export default ImageComponent;