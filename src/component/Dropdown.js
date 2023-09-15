import React from "react";

//import components
import styled from "styled-components";
import { menuData } from "../data/MenuData";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70vh;
  background: #002e5d;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-110%")};
  bottom: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cusrsor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-gap: 10px;
  text-align: center;
  margin-bottom: 1rem;
`;

const DropdownLink = styled.a`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
  text-decoration: none;
  text-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 1rem;
  padding: 0px 30px;
  &:hover {
    color: #ff9f0d;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    border: 2px solid #e53f70;
    border-radius: 20px;
    height: 50px;
    width: 150px;
    color: #e53f70;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: #e53f70;
      transform: scale(1.05);
      border: #e53f70;
      color: #fff;
    }
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <h4>close</h4>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink href={item.link} key={index} onClick={toggle}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <NavBtn>
          <button>Sign in</button>
        </NavBtn>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
