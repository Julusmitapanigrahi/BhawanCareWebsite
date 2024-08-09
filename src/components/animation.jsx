import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ animationType, direction = 'left', children, text, ...props }) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
    } else if (!inView && isAnimating) {
      setIsAnimating(false);
    }
  }, [inView, isAnimating]);

  const typewriterConfig = useTypewriter({
    words: [text],
    loop: 0, // Set to 0 for infinite loop
  });

  const slideInFrom = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

  const animations = {
    fadeIn: useSpring({ opacity: inView ? 1 : 0, config: { duration: 1000 } }),
    slideIn: useSpring({ transform: inView ? 'translateX(0)' : slideInFrom, config: { duration: 1000 } }),
    scaleUp: useSpring({ transform: inView ? 'scale(1)' : 'scale(0.5)', config: { duration: 500 } }),
    rotate: useSpring({ transform: inView ? 'rotate(360deg)' : 'rotate(0deg)', config: { duration: 1000 } }),
    bounce: useSpring({
      transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      config: { tension: 500, friction: 10 },
    }),
    fadeInUp: useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      config: { duration: 1000 },
    }),
    zoomIn: useSpring({
      transform: inView ? 'scale(1)' : 'scale(0.5)',
      opacity: inView ? 1 : 0,
      config: { duration: 500 },
    }),
    typewriter: { text: typewriterConfig[0], cursor: <Cursor /> },
  };

  const animationProps = animations[animationType] || {};

  return (
    <animated.div
      ref={inViewRef}
      style={animationProps}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {animationType === 'typewriter' ? (
        <div>
          {animationProps.text}
          {animationProps.cursor}
        </div>
      ) : (
        children
      )}
    </animated.div>
  );
};

export default AnimatedComponent;
