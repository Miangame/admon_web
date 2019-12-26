import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import NavbarComponent from '../components/NavbarComponent'

const Layout = ({ children }) => (
  <LayoutContainer>
    <Head>
      <title>Admon. Loterías Ntra. Sra. de los Remedios</title>
    </Head>
    <NavbarComponent />
    {children}
  </LayoutContainer>
)

const LayoutContainer = styled.main``

export default Layout
