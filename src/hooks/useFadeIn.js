import { useState, useEffect } from 'react';

function useFadeIn(duration = 1000) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setOpacity(1), 0);

    return () => clearTimeout(fadeTimeout);
  }, []);

  const style = {
    opacity,
    transition: `opacity ${duration}ms ease-in-out`,
  };

  return style;
}

export default useFadeIn;