import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import styled from 'styled-components'

import media from '../theme/media'

const NavbarComponent = () => (
  <CustomNavbar
    className="light-blue darken-4"
    alignLinks="right"
    brand={
      <Title className="brand-logo" href="/">
        <Image src="/assets/img/loteria.png" alt="" />
        <span></span>
      </Title>
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
    <NavItem href="/">Inicio</NavItem>
    <NavItem href="/contact">Contacto</NavItem>
  </CustomNavbar>
)

const CustomNavbar = styled(Navbar)``

const Title = styled.a`
  font-size: 16px !important;
  display: flex !important;
  align-items: center;

  span:before {
    content: 'Admon. nº 1 Villafranca';
  }

  ${media.greaterThan('auxMax')`
    font-size: 30px !important;
  `}

  ${media.greaterThan('lg')`
    margin: 0 15px;

    span:before {
      content: 'Admon. Ntra. Sra. de los Remedios';
    }
  `}
`

const Image = styled.img`
  display: none;
  margin-right: 5px;
  width: 25px;
  height: 25px;

  ${media.greaterThan('md')`
    width: 40px;
    height: 40px;
  `}

  ${media.greaterThan('auxMin')`
    display: block;
  `}
`

export default NavbarComponent
