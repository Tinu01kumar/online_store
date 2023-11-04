import React, { useState, useEffect, useRef } from 'react';
import logo from "./Images/logo2.webp";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Logo = styled.div`
  img {
    width: 5rem;
    height: auto;
  }
  background-color: white;
`;

const Main = styled.div`
  padding: 5px 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  margin: 0.6rem;
  background-color: red;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  position: relative;
  
  &:hover {
    .dropdown {
      display: block;
    }
  }
`;

const Auth = styled.div`
  background-color: white;
  @media (max-width: 720px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  padding: 0.6rem;
`;

const DropdownItem = styled.div`
  padding: 0.3rem;
  background-color: white;
  cursor: pointer;

  Link{
    text-decoration: none;
    color: black;

  }

  &:hover {
    background-color: #eee;
  }
`;

const HamburgerMenu = styled.div`
  @media (max-width: 720px) {
    display: block;
  }
  display: none;
  background-color: white;
  padding: 0px 2rem;
`;

const SmallDeviceHeader = styled.div`
  position: absolute;
  top: 4rem;
  display: block;
  width: 100%;
  z-index:2;
  background-color: white;
  transition: max-height 0.9s ease-in-out; 
`;

const Accordionlist = styled.div`
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: white;
  div {
    padding: 0.3rem;
    background-color: white;
  }
`;

const Acorrdiancontent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
`;

const RotateIcon = styled.span`
  transform: ${(props) => (props.rotate ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.8s ease-in-out;
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isAccordion, setIsAccordion] = useState(false);
  const smallDeviceHeaderRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (smallDeviceHeaderRef.current && !smallDeviceHeaderRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Main>
    <Link  to="/">  <Logo><img src={logo} alt="Logo" /></Logo></Link>
      <HamburgerMenu showMenu={showMenu}>
        {showMenu ? (
          <CloseIcon style={{ color: "red" }} onClick={toggleMenu} />
        ) : (
          <MenuIcon style={{ color: "red" }} onClick={toggleMenu} />
        )}
      </HamburgerMenu>
      <Auth>
        <Button>Category
          <Dropdown className="dropdown">
            <DropdownItem>
              <Link style={{textDecoration:"none", backgroundColor:"white"}} to="/mobile">Mobile</Link>
            </DropdownItem>
            <DropdownItem>
            <Link style={{textDecoration:"none", backgroundColor:"white"}}  to="/clothes">Clothes</Link>
            </DropdownItem>
            <DropdownItem>
            <Link style={{textDecoration:"none", backgroundColor:"white"}} to="/furniture">Furtinure</Link>
            </DropdownItem>
          </Dropdown>
        </Button>
        <Button>Login</Button>
        <Button>Signup</Button>
      </Auth>
      <SmallDeviceHeader   ref={smallDeviceHeaderRef}>
        {showMenu && (
          <>
            <Acorrdiancontent onClick={() => setIsAccordion(!isAccordion)}>
              <div>Category</div>
              <RotateIcon rotate={isAccordion}>
                {isAccordion ? "-" : "+"}
              </RotateIcon>
            </Acorrdiancontent>
            <Accordionlist open={isAccordion}>
              <div><Link style={{textDecoration:"none" , backgroundColor:"white"}} to="/mobile">Mobile</Link></div>
              <div> <Link style={{textDecoration:"none" , backgroundColor:"white"}}  to="/furniture">Furniture</Link></div>
              <div><Link style={{textDecoration:"none" , backgroundColor:"white"}}  to="/clothes">Clothes</Link></div>
            </Accordionlist>
            <hr style={{ border: "1px solid #FF9130" }} />
            <div style={{ padding: "1rem" }}>Login</div>
            <hr style={{ border: "1px solid #FF9130" }} />
            <div style={{ padding: "1rem" }}>Signup</div>
            <hr style={{ border: "1px solid #FF9130" }} />
          </>
        )}
      </SmallDeviceHeader>
    </Main>
  );
};

export default Header;
