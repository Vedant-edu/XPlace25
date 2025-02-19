import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: ReturnType<typeof requestAnimationFrame> | undefined;
    
    // Start from the nearest hundred
    const startValue = Math.floor(value / 100) * 100;
    const endValue = value;
    
    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (progress: number) => 1 - (1 - progress) * (1 - progress);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(startValue + (endValue - startValue) * easedProgress));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animation);
      }
    };
    
    animationFrame = requestAnimationFrame(animation);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return count;
};

export default AnimatedCounter;