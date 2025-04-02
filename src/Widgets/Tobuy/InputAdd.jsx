import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/features/tobuySlice";
import styled from "styled-components";

export default function InputAdd() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addItem({ item, id: Date.now() }));
    setItem("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSave();
    }
  };
  
  return (
    <HandleInput>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button type="button" onClick={handleSave}>
        Add
      </button>
    </HandleInput>
  );
}

const HandleInput = styled.div`
  margin-top: 50px;
`