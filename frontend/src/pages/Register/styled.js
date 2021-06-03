import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  input {
    height: 40px;
    width: 600px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 30px;
    margin-top: 5px;

    &:focus {
      border: 1px solid #00b4d8;
    }
  }
`;
