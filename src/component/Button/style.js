import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: #be123c;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transistion: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: 20px;

  &:hover {
    transform: translateY(-2px);
    background: grey;
  }
  @media Screen and (max-width: 300px) {
    width: 50px;
  }
`;
