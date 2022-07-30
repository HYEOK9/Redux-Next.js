import React from 'react';
import styled from 'styled-components';
import CategoryButton from '../UI/CategoryButton';
const ButtonBar = () => {
  return (
    <>
      <Container>
        <ButtonWrapper>
          <CategoryButton value="한식" />
          <CategoryButton value="일식" />
          <CategoryButton value="중식" />
          <CategoryButton value="양식" />
          <CategoryButton value="기타" />
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default ButtonBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  margin-top: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
