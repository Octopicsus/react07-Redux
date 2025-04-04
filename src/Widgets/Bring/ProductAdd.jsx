import React, {useEffect} from "react";
import { productList } from "../../Data/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/features/tobuySlice";
import { setProducts, selectAvailableProducts } from "../../Store/features/productsSlice";
import styled from "styled-components";

export default function ProductAdd() {
  const dispatch = useDispatch();
  const availableProducts = useSelector(selectAvailableProducts);

  useEffect(() => {
    dispatch(setProducts(productList));
  }, [dispatch]);

  const productAdd = (product) => {
    dispatch(addItem({ item: product.item, id: product.id }));
  };

  return (
    <>
      <Products>
        <Title>Available:</Title>
        <Wrapper>
          {availableProducts.map((product) => (
            <Product onClick={() => productAdd(product)} key={product.id}>
              {product.item}
            </Product>
          ))}
        </Wrapper>
      </Products>
    </>
  );
}

const Wrapper = styled.div`
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  display: flex;
  gap: 3px;
`;

const Products = styled.div`
  padding-top: 30px;
  margin: 0 auto;
  width: 409px;
`;

const Product = styled.button`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: #6fb8ad;
  color: white;
  border: none;

  &:hover {
    background-color: #4c887f;
  }
`;

const Title = styled.h3`
  text-align: left;
  width: 800px;
`;
