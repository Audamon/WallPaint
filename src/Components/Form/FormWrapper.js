import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 40px);
    margin: 0 20px 10px 20px;
    padding: 0 20px  20px 80px;
  }
  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

export default FormWrapper;
