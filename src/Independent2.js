import React, { useState } from "react";
import { useCurrentName } from "./hooks/useCurrentName";
const Independent2 = () => {
  const [name, setName] = useCurrentName("komal");
  return (
    <div>
      <div>{name} is a indepandenpt solider </div>;
      <input
        type="button"
        value="send"
        onClick={() => {
          setName("vivek2");
        }}
      />
    </div>
  );
};
export default Independent2;
