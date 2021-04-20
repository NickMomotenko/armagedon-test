import React from "react";

import { useLocation } from "react-router-dom";

export const useLocationData = () => {
  const [location, setLocation] = React.useState(null);

  const data = useLocation();

  React.useEffect(() => {
    setLocation(data.pathname.slice(1));
  }, []);

  return { location };
};
