import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: url("https://thumbs.gfycat.com/ElectricAggravatingFiddlercrab-size_restricted.gif");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }

  html, body, #root {
    height: 100%
  }

  button{
    cursor: pointer;
    border: none;
    color: #fff;  
    transition: all 380ms;
  }


  a{
    text-decoration: none;
    color: #fff;
  }

  ul{
    list-style: none
  }
`;

export const Container = styled.section`
  max-width: 90%;
  background: linear-gradient(
    108.99deg,
    rgba(255, 255, 255, 0.5) 0.71%,
    rgba(255, 255, 255, 0.25) 100%
  );
  backdrop-filter: blur(10px);
  margin: 30px auto;
  padding: 30px;
  border-radius: 30px;
`;

export const ButtonBlue = styled.button`
  background: transparent;
  padding: 1rem 2rem;
  border: 0.5px solid;

  border-radius: 30px;

  :hover {
    background: #00b4d8;
  }
`;

export const ButtonRed = styled.button`
  background: transparent;
  padding: 1rem 2rem;
  border: 0.5px solid;

  border-radius: 30px;

  :hover {
    background: #d00000;
  }
`;
