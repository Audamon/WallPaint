import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../../Components/Form/Input';
import InputWrapper from '../../../Components/Form/InputWrapper';
import Title from '../../../Components/Title/Title';
import FormWrapper from '../../../Components/Form/FormWrapper';
import SubTitle from '../../../Components/Title/SubTtitle';

export default function Calculator() {
  const [wall, setWall] = useState({});
  const handleChange = (e) => {
    console.log(e.target);
    if (e.target.id === 'height') {
      setWall({
        ...wall,
        [e.target.name]: { ...wall[e.target.name], height: e.target.value },
      });
    } else if (e.target.id === 'width') {
      setWall({
        ...wall,
        [e.target.name]: { ...wall[e.target.name], width: e.target.value },
      });
    } else if (e.target.id === 'windows') {
      setWall({
        ...wall,
        [e.target.name]: { ...wall[e.target.name], windows: e.target.value },
      });
    } else if (e.target.id === 'doors') {
      setWall({
        ...wall,
        [e.target.name]: { ...wall[e.target.name], doors: e.target.value },
      });
    }
    console.log(wall);
  };
  return (
    <>
      <CalculatorContainer>
        <Title>
          {' '}
          Calcule a quantidade de tinta necessária para pintar as paredes{' '}
        </Title>
        <SubTitle>
          Insira as medidas e o número de portas e janelas da parede 1
        </SubTitle>
        <FormWrapper>
          <InputWrapper>
            <Input
              label="Altura da parede 1"
              type="text"
              value={wall.height || ''}
              onChange={handleChange}
              id="height"
              name="1"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Largura da parede 1"
              type="text"
              value={wall.width || ''}
              onChange={handleChange}
              id="width"
              name="1"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de janelas na parede 1"
              type="text"
              value={wall.windows || ''}
              onChange={handleChange}
              id="windows"
              name="1"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de portas na parede 1"
              type="text"
              value={wall.doors || ''}
              onChange={handleChange}
              id="doors"
              name="1"
            />
          </InputWrapper>
        </FormWrapper>
        <SubTitle>
          Insira as medidas e o número de portas e janelas da parede 2
        </SubTitle>
        <FormWrapper>
          <InputWrapper>
            <Input
              label="Altura da parede 2"
              type="text"
              value={wall.height || ''}
              onChange={handleChange}
              id="height"
              name="2"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Largura da parede 2"
              type="text"
              value={wall.width || ''}
              onChange={handleChange}
              id="width"
              name="2"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de janelas na parede 2"
              type="text"
              value={wall.windows || ''}
              onChange={handleChange}
              id="windows"
              name="2"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de portas na parede 2"
              type="text"
              value={wall.doors || ''}
              onChange={handleChange}
              id="doors"
              name="2"
            />
          </InputWrapper>
        </FormWrapper>
        <SubTitle>
          Insira as medidas e o número de portas e janelas da parede 3
        </SubTitle>
        <FormWrapper>
          <InputWrapper>
            <Input
              label="Altura da parede 3"
              type="text"
              value={wall.height || ''}
              onChange={handleChange}
              name="3"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Largura da parede 3"
              type="text"
              value={wall.width || ''}
              onChange={handleChange}
              name="3"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de janelas na parede 3"
              type="text"
              value={wall.windows || ''}
              onChange={handleChange}
              name="3"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de portas na parede 3"
              type="text"
              value={wall.doors || ''}
              onChange={handleChange}
              name="3"
            />
          </InputWrapper>
        </FormWrapper>
        <SubTitle>
          Insira as medidas e o número de portas e janelas da parede 4
        </SubTitle>
        <FormWrapper>
          <InputWrapper>
            <Input
              label="Altura da parede 4"
              type="text"
              value={wall.height || ''}
              onChange={handleChange}
              name="4"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Largura da parede 4"
              type="text"
              value={wall.width || ''}
              onChange={handleChange}
              name="4"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de janelas na parede 4"
              type="text"
              value={wall.windows || ''}
              onChange={handleChange}
              name="4"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Quantidades de portas na parede 4"
              type="text"
              value={wall.doors || ''}
              onChange={handleChange}
              name="4"
            />
          </InputWrapper>
        </FormWrapper>
      </CalculatorContainer>
    </>
  );
}

const CalculatorContainer = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 30px 0;
`;
