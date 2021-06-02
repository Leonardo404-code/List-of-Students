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
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 380ms;
  }
  button:hover{
    filter:brightness(85%);
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  ul{
    list-style: none
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background: linear-gradient(108.99deg, rgba(255, 255, 255, 0.5) 0.71%, rgba(255, 255, 255, 0.25) 100%);
  backdrop-filter: blur(10px);
  margin: 30px auto;
  padding: 30px;
  border-radius: 30px;
`;
