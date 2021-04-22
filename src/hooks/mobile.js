import React, { useEffect, useState } from "react";

export const useMobileWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const handleChangeWidth = () => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeWidth);

    return () => {
      window.removeEventListener("resize", handleChangeWidth);
    };
  }, []);

  return {
    width,
    isMobile
  };
};
