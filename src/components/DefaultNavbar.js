import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/" rel="noreferrer">
            <NavbarBrand>LMS</NavbarBrand>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink>
                <Icon name="home" size="2xl" />

                <Link to="/lands">Lands</Link>
              </NavLink>
              {login ? (
                <NavLink>
                  <Icon name="login" size="2xl" />

                  <Link to="/Login">Login</Link>
                </NavLink>
              ) : (
                <NavLink>
                  <Icon name="description" size="2xl" />

                  <Link to="/register">Register</Link>
                </NavLink>
              )}

              <NavLink>
                <Icon name="person" size="2xl" />

                <Link to="/dashboard">Dashboard</Link>
              </NavLink>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
