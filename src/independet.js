import React, { useState } from "react";
import { useCurrentName } from "./hooks/useCurrentName";
const Independent = () => {
  const [name, setName] = useCurrentName("kapil");
  return (
    <div>
      <div>{name} is a indepandenpt solider </div>;
      <input
        type="button"
        value="send"
        onClick={() => {
          setName("vivek");
        }}
      />
    </div>
  );
};
export default Independent;
