import React from 'react'
import Head from 'next/head'

import NavbarComponent from '../components/NavbarComponent'

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Admon. Loterías Ntra. Sra. de los Remedios</title>
    </Head>
    <NavbarComponent />

    <p>Web en construccion, disculpe las molestias.</p>
    <p>
      Si desea ponerse en contacto con nosotros puede llamar al tfono.{' '}
      <a href="tel:957190286">957190286</a> o escribir un email a{' '}
      <a href="mailto:admon1villafranca@gmail.com">
        admon1villafranca@gmail.com
      </a>
    </p>
  </React.Fragment>
)

export default Index
