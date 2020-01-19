import React from 'react'
import styled from 'styled-components'
import { Card, Button, Row, Col, TextInput } from 'react-materialize'
import admonData from '../data/admonData'

const Contact = () => {
  return (
    <React.Fragment>
      <ContainerContact className="container">
        <h3>Contacta con nosotros</h3>
        <Row>
          <Col s={12} l={6}>
            <Card className="" textClassName="">
              <ContainerMap>
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=admon%20loterias%20villafranca%20de%20cordoba&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </ContainerMap>

              <Row>
                <Col s={12} m={6} l={12}>
                  <Column s={12}>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                      {admonData.address}
                      <br />
                      {admonData.zip_code}
                      <br />
                      {admonData.city}
                    </p>
                  </Column>
                </Col>
                <Col s={12} m={6} l={12}>
                  <Column s={12}>
                    <i className="fas fa-phone"></i>
                    <p>
                      <a href="tel:957190286" target="_blank">
                        {admonData.phone}
                      </a>
                    </p>
                  </Column>
                  <Column s={12}>
                    <i className="fab fa-whatsapp"></i>
                    <p>
                      <a href="https://wa.me/34676940074" target="_blank">
                        {admonData.whatsapp}
                      </a>
                    </p>
                  </Column>
                  <Column s={12}>
                    <i className="fas fa-envelope"></i>
                    <p>
                      <a
                        href="mailto:admon1villafranca@gmail.com"
                        target="_blank"
                      >
                        {admonData.email}
                      </a>
                    </p>
                  </Column>
                </Col>
                <Column s={12}>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Verano</th>
                        <th>Invierno</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lunes-Viernes</th>
                        <td>
                          {admonData.schedule.mondayFriday.summer.morning}
                          <br />
                          {admonData.schedule.mondayFriday.summer.afternoon}
                        </td>
                        <td>
                          {admonData.schedule.mondayFriday.winter.morning}
                          <br />
                          {admonData.schedule.mondayFriday.winter.afternoon}
                        </td>
                      </tr>
                      <tr>
                        <th>Sábado</th>
                        <td colSpan={2} className="center-align">
                          {admonData.schedule.saturday}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
              </Row>
            </Card>
          </Col>
          <Col s={12} l={6}>
            <Card
              title="Formulario de contacto"
              actions={[
                <Button
                  key="1"
                  className="light-blue darken-3"
                  node="button"
                  waves="red"
                  disabled
                >
                  Enviar
                </Button>
              ]}
            >
              <Row>
                <TextInput icon="account_circle" label="Nombre" s={12} />

                <TextInput icon="email" email label="Email" validate s={12} />

                <div className="input-field col s12">
                  <i className="material-icons prefix">message</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="icon_prefix2">¿Qué desea?</label>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </ContainerContact>
    </React.Fragment>
  )
}

const ContainerContact = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  h3 {
    text-align: center;
  }
`

const ContainerMap = styled.div`
  display: flex;
  justify-content: center;

  iframe  {
    width: 100%;
  }
`

const Column = styled(Col)`
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  p {
    margin: 5px !important;
  }
`

export default Contact
