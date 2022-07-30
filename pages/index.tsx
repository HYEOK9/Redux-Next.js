import type { NextPage } from 'next';
import styled from 'styled-components';
import RecommendRecipe from '../components/UI/RecommendRecipe';
import ButtonBar from '../components/layout/ButtonBar';
const Home: NextPage = () => {
  return (
    <>
      <Container>
        <RecommendRecipe />
        <ButtonBar />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
