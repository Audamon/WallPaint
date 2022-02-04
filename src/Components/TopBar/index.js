import styled from 'styled-components';

export default function TopBar() {
  return (
    <>
      <TitleContainer>WallPaint</TitleContainer>
    </>
  );
}

const TitleContainer = styled.header`
  width: 100vw;
  height: 80px;
  font-family: 'Finger Paint', cursive;
  font-size: 30px;
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(121, 9, 118, 1) 50%,
    rgba(0, 82, 255, 1) 100%
  );
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;
