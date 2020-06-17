import React, { useState, useEffect } from "react";

export const useCurrentName = param => {
  const [name, setName] = useState(param);
  const newListener = useState()[1];

  useEffect(
    name => {
      console.log("shared hooks", name);
    },
    [name]
  );
  return [name, setName];
};
