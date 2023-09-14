import React from "react";

//import components
import styled from "styled-components";
import Img from "../img/tv.png";

const Nav = styled.div`
  height: 60px;
  background: transparent;
  z-index: 100;
  width: 100%;
`;

const NavMenu = styled.div`
  align-items: center;
  color: #fff;
`;

const CustomInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &::placeholder {
    color: #fff;
  }
`;

const Navbar = ({ handleChange }) => {
  return (
    <Nav>
      <NavMenu className="row" style={{ justifyContent: "space-between" }}>
        <div className="col">
          <div
            className="d-flex align-items-center"
            style={{ color: "#fff", gap: "20px" }}
          >
            <img src={Img} alt="" className="img-fluid" />
            <p style={{ margin: "0" }}>MovieBox</p>
          </div>
        </div>
        <div className="col-5">
          <div className="input-group">
            <CustomInput
              style={{
                background: "transparent",
                borderRight: "none",
                transistion: "none",
                color: "#fff",
              }}
              type="text"
              placeholder="what do you want to watch"
              className="form-control"
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                className="form-control"
                type="button"
                style={{
                  borderRadius: "0px 5px 5px 0px",
                  borderLeft: "none",
                  background: "transparent",
                  color: "#fff",
                }}
                onChange={handleChange}
              >
                search
              </button>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <p style={{ margin: "0" }}>Sign in</p>
        </div>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
