import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: #edb348d6;
  color: rgb(255 255 255);
  padding: 21px 22px;
  border-radius: 10px; 
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 1px 6px 6px 2px #edb348d6;
    box-shadow: black;
    transform: scale(0.76);
    
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;