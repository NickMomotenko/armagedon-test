import React, { useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState();

  React.useEffect(() => {
    setDate(new Date());
  }, []);

  return { date };
};
