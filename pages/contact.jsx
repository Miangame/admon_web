import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Button,
  Icon,
  Row,
  Col,
  TextInput,
  Textarea
} from 'react-materialize'

import media from '../theme/media'

const Contact = () => (
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
                    Calle Alcolea 48
                    <br />
                    14420
                    <br />
                    Villafranca de Córdoba
                  </p>
                </Column>
              </Col>
              <Col s={12} m={6} l={12}>
                <Column s={12}>
                  <i className="fas fa-phone"></i>
                  <p>
                    <a href="tel:957190286" target="_blank">
                      957 190 286
                    </a>
                  </p>
                </Column>
                <Column s={12}>
                  <i className="fab fa-whatsapp"></i>
                  <p>
                    <a href="https://wa.me/34676940074" target="_blank">
                      676 940 074
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
                      admon1villafranca@gmail.com
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
                        09:00-13:30
                        <br />
                        17:30-21:00
                      </td>
                      <td>
                        09:00-13:30
                        <br />
                        17:00-20:30
                      </td>
                    </tr>
                    <tr>
                      <th>Sábado</th>
                      <td colSpan={2}>09:00-13:00</td>
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

              <div class="input-field col s12">
                <i class="material-icons prefix">message</i>
                <textarea
                  id="icon_prefix2"
                  class="materialize-textarea"
                ></textarea>
                <label for="icon_prefix2">¿Qué desea?</label>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    </ContainerContact>
  </React.Fragment>
)

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
