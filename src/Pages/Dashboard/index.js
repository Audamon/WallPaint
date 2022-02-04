import styled from 'styled-components';
import TopBar from '../../Components/TopBar/index';
import Calculator from './Calculator';

export default function Dashboard() {
  return (
    <>
      <TopBar />
      <Container>
          <Calculator />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(148,254,255,1) 0%, rgba(255,220,144,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
`;
