import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Input from '../../../Components/Form/Input';
import InputWrapper from '../../../Components/Form/InputWrapper';
import Title from '../../../Components/Title/Title';
import FormWrapper from '../../../Components/Form/FormWrapper';
import SubTitle from '../../../Components/Title/SubTtitle';
import Button from '../../../Components/Form/Button';

import Calculate from '../../../Service/Calculate';

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Calculator() {
  const [wall, setWall] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Calculate(wall, setMessage);
    setModalIsOpen(true);
  };
  function closeModal() {
    setModalIsOpen(false);
  }

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
        <FormWrapper onSubmit={handleSubmit}>
          <InputContainer>
            <InputWrapper>
              <Input
                label="Altura da parede em metros 1"
                type="text"
                value={wall[1] === undefined ? '' : wall[1].height}
                onChange={handleChange}
                id="height"
                name="1"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Largura da parede em metros 1"
                type="text"
                value={wall[1] === undefined ? '' : wall[1].width}
                onChange={handleChange}
                id="width"
                name="1"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de janelas na parede 1"
                type="text"
                value={wall[1] === undefined ? '' : wall[1].windows}
                onChange={handleChange}
                id="windows"
                name="1"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de portas na parede 1"
                type="text"
                value={wall[1] === undefined ? '' : wall[1].doors}
                onChange={handleChange}
                id="doors"
                name="1"
              />
            </InputWrapper>
          </InputContainer>
          <SubTitle>
            Insira as medidas e o número de portas e janelas da parede 2
          </SubTitle>
          <InputContainer>
            <InputWrapper>
              <Input
                label="Altura da parede em metros 2"
                type="text"
                value={wall[2] === undefined ? '' : wall[2].height}
                onChange={handleChange}
                id="height"
                name="2"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Largura da parede em metros 2"
                type="text"
                value={wall[2] === undefined ? '' : wall[2].width}
                onChange={handleChange}
                id="width"
                name="2"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de janelas na parede 2"
                type="text"
                value={wall[2] === undefined ? '' : wall[2].windows}
                onChange={handleChange}
                id="windows"
                name="2"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de portas na parede 2"
                type="text"
                value={wall[2] === undefined ? '' : wall[2].doors}
                onChange={handleChange}
                id="doors"
                name="2"
              />
            </InputWrapper>
          </InputContainer>
          <SubTitle>
            Insira as medidas e o número de portas e janelas da parede 3
          </SubTitle>
          <InputContainer>
            <InputWrapper>
              <Input
                label="Altura da parede em metros 3"
                type="text"
                value={wall[3] === undefined ? '' : wall[3].height}
                onChange={handleChange}
                id="height"
                name="3"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Largura da parede em metros 3"
                type="text"
                value={wall[3] === undefined ? '' : wall[3].width}
                onChange={handleChange}
                id="width"
                name="3"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de janelas na parede 3"
                type="text"
                value={wall[3] === undefined ? '' : wall[3].windows}
                onChange={handleChange}
                id="windows"
                name="3"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de portas na parede 3"
                type="text"
                value={wall[3] === undefined ? '' : wall[3].doors}
                onChange={handleChange}
                id="doors"
                name="3"
              />
            </InputWrapper>
          </InputContainer>
          <SubTitle>
            Insira as medidas e o número de portas e janelas da parede 4
          </SubTitle>
          <InputContainer>
            <InputWrapper>
              <Input
                label="Altura da parede em metros 4"
                type="text"
                value={wall[4] === undefined ? '' : wall[4].height}
                onChange={handleChange}
                id="height"
                name="4"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Largura da parede em metros 4"
                type="text"
                value={wall[4] === undefined ? '' : wall[4].width}
                onChange={handleChange}
                id="width"
                name="4"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de janelas na parede 4"
                type="text"
                value={wall[4] === undefined ? '' : wall[4].windows}
                onChange={handleChange}
                id="windows"
                name="4"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Quantidades de portas na parede 4"
                type="text"
                value={wall[4] === undefined ? '' : wall[4].doors}
                onChange={handleChange}
                id="doors"
                name="4"
              />
            </InputWrapper>
            <SubmitContainer>
              <Button type="submit">Calcular</Button>
            </SubmitContainer>
          </InputContainer>
        </FormWrapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Quantidade de latas de tintas necessarias"
          ariaHideApp={false}
        >
          <Message>{message}</Message>
          <ModalButton onClick={closeModal}>Voltar</ModalButton>
        </Modal>
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

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;
  display: flex;
  justify-content: center;
  > button {
    margin-top: 0 !important;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 40px);
    margin: 0 20px 10px 20px;
    padding: 0 20px 20px 80px;
  }
`;
const ModalButton = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 20px;
`;

const Message = styled.p`
 line-break: break-all;
 white-space: pre;
`;
