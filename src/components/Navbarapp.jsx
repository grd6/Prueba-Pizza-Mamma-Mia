import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import imgNabar from "../assets/18514975-ai.svg";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";

const Navbarapp = () => {
  const { TotalPrice } = useContext(DataContext);

  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <>
      <Navbar expand="lg" className="bg-dark align-self-center  ">
        <Container className="f-flex">
          <Navbar.Brand href="#home" className="text-white d-flex ">
            <img src={imgNabar} className="imgNabar" alt="pizza"></img>
            <Nav>
              <NavLink to="/" className={setActiveClass}>
                Pizzeria Mamma Mia!
              </NavLink>
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <NavLink to="/Cart" className={setActiveClass}>
              <div className="">
               
                <div>
                  <h5>Monto: ${TotalPrice().toLocaleString("es-CL")}</h5>
                </div>
              </div>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarapp;
