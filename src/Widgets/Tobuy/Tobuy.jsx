import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../Store/features/tobuySlice";
import styled from "styled-components";

export default function Tobuy() {
  const itmeBuy = useSelector((state) => state.tobuy);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <>
      <Cart>
        <h1>Products</h1>
        {itmeBuy.data.length > 0 && <Title>Cart:</Title>}
        <Wrapper>
        {itmeBuy.data.length === 0 && <Empty>Your cart is empty</Empty>}
          {itmeBuy.data.map((item) => (
            <Product
              className="productItem"
              key={item.id}
              onClick={() => {
                handleRemove(item);
              }}
            >
              {item.item}
            </Product>
          ))}
        </Wrapper>
      </Cart>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  text-align: left;
  gap: 3px;
  flex-wrap: wrap;
  min-height: 100px;
`;

const Cart = styled.div`
  margin: 0 auto;
  max-width: 409px;
`;

const Product = styled.button`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: #f16a70;
  color: white;
  border: none;
`;

const Empty = styled.span`
margin-top: 40px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h3`
  text-align: left;
  width: 409px;
`;
