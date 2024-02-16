import { faMoon, faSun, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../JS/action';

function Navb() {
    const isdark=useSelector(state=>state.reducer.isDark)
    const[dark,setDark]=useState(isdark)
    const dispatch=useDispatch()
    const changeV=()=>{
        dispatch(changeColor(isdark))
        setDark(!dark)
    }
  return (
    <Navbar  data-bs-theme={dark?"light":"dark"}bg={dark?"light":"dark"}>
      <Container >
        <Navbar.Brand href="#home">GOmycode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {isdark?<FontAwesomeIcon icon={faToggleOn}  onClick={changeV}/>:<FontAwesomeIcon icon={faToggleOff} onClick={changeV} color='white'/>}
      </Container>
    </Navbar>
  );
}

export default Navb;