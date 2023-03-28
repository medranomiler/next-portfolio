import React, { useRef, useLayoutEffect, useState } from "react";

function SlideIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const element = ref.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s",
        position: "relative",
        right: 0,
      }}
    >
      {children}
    </div>
  );
}

export default SlideIn;
