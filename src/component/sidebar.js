import React from "react";

//import components
import { menuData } from "../data/MenuData";
import styled from "styled-components";
import Img from "../img/tv.png";

const SideLink = styled.div`
  padding-top: 2rem;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #000d1a;
  }
  h1 {
    color: black;
  }
`;

const SideMenu = styled.div`
  display: grid;
  align-items: center;
  margin-right: -48px;
`;

const Sidebar = ({ setDisplayItem }) => {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        position: "fixed",
      }}
    >
      <SideMenu>
        <div
          className="d-flex align-items-center"
          style={{ color: "#fff", gap: "20px" }}
        >
          <img src={Img} alt="" className="img-fluid" />
          <p style={{ margin: "0", color: "#000" }}>MovieBox</p>
        </div>
        {menuData.map((item, index) => {
          return (
            <SideLink
              to={item.link}
              key={index}
              onClick={() => {
                setDisplayItem(item.ref);
              }}
            >
              {item.title}
            </SideLink>
          );
        })}
      </SideMenu>
    </div>
  );
};

export default Sidebar;
