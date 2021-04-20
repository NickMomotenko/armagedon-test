import React, { useState } from "react";

export const useCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (event) => {
    setChecked(event.target.checked);
  };

  return { checked, onChange };
};
