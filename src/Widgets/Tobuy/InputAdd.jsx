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
      <InputType
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add your purchase to the list"
      />
      <ButtonAdd type="button" onClick={handleSave}>
        +
      </ButtonAdd>
    </HandleInput>
  );
}

const HandleInput = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  background-color: #c9c9c9;
  width: 340px;
  border-radius: 20px;
`;

const InputType = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border: none;
`;

const ButtonAdd = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #029b8e;
  color: transparent;
  border: none;
  background-image: url("./img/addBtn.svg");
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
`;
