import React from "react";
import { Link } from "react-router-dom";

//import components
import { menuData } from "../data/MenuData";
import styled from "styled-components";
import Img from "../img/tv.png";
import { FaBars } from "react-icons/fa";

const SideLink = styled.div`
  padding-top: 2rem;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #000d1a;
  }
  h1 {
    color: ;
  }
`;
const sideBarStyle = `
display: none;
@media Screen and (max-width: 1200px){
    display: block;
    background-size: contain;
    height: 50px;
    width: 40px;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
    color: #000d1a;
    z-index: 999;
}
@media Screen and (max-width: 768px){
    height: 40px;
    width: 30px;
}
@media Screen and (max-width: 480px){
    height: 30px;
    width: 30px;
}
`;

const SideBar = styled(FaBars)`
  ${sideBarStyle}
`;

const SideMenu = styled.div`
  display: grid;
  align-items: center;
  grid-template-row: 1fr 1fr 1fr 1fr;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;

const Sidebar = ({ toggle }) => {
  return (
    <div
      style={{
        height: "100vh",
        border: "1px solid grey",
        borderRadius: "0px 40px 40px 0px",
        borderleft: "none",
      }}
      className="p-5"
    >
      <div className="d-flex justify-content-between align-items-center">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center"
            style={{ color: "#fff", gap: "20px" }}
          >
            <img src={Img} alt="" className="img-fluid" />
            <p style={{ margin: "0", color: "#000" }}>MovieBox</p>
          </div>
        </Link>
        <SideBar onClick={toggle} />
      </div>
      <SideMenu>
        {menuData.map((item, index) => {
          return (
            <SideLink to={item.link} key={index}>
              {item.title}
            </SideLink>
          );
        })}
      </SideMenu>
    </div>
  );
};

export default Sidebar;
