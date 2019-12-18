import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

const NavbarComponent = () => (
  <Navbar
    alignLinks="right"
    brand={
      <a className="brand-logo" href="#">
        Lotería Ntra. Sra. de los Remedios
      </a>
    }
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <NavItem href="">Home</NavItem>
  </Navbar>
)

export default NavbarComponent
