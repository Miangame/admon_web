import React from 'react'
import App from 'next/app'

import Global from '../components/Global'
import Layout from '../components/Layout'
import Head from '../components/Head'

class AdmonApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head />
        <Global />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

export default AdmonApp
