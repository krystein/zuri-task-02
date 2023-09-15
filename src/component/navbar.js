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
  @media screen and (max-width: 1200px) {
    p {
      display: none;
    }
  }
`;

const CustomInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &::placeholder {
    color: #fff;
  }
`;

const Navbar = ({ handleChange, search }) => {
  return (
    <Nav>
      <NavMenu className="row">
        <div className="col ">
          <div
            className="d-flex align-items-center"
            style={{ color: "#fff", gap: "20px" }}
          >
            <img src={Img} alt="" className="img-fluid" />
            <p style={{ margin: "0" }}>MovieBox</p>
          </div>
        </div>
        <div className="col" style={{ justifyContent: "center" }}>
          <form>
            <div className="input-group">
              <CustomInput
                style={{
                  background: "transparent",
                  transistion: "none",
                  color: "#fff",
                }}
                type="text"
                placeholder="what do you want to watch"
                className="form-control-lg"
                value={search}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="col d-flex justify-content-end">
          <a
            href="/"
            style={{ margin: "0", textDecoration: "none", color: "pink" }}
          >
            Sign in
          </a>
        </div>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
