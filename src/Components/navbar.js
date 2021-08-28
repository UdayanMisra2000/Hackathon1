import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import img11 from './Images/mobile.png'


export default function Header() {
    return (
        <>
        <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
  <Navbar.Brand href="/"> <img src = {img11} width = "50" height = "50" /> Blue Moon </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Navbar.Collapse className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
    </Nav>
    <Nav.Link href="/contacts">Contact</Nav.Link>
  </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}
