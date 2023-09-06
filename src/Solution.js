import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collaborative from './Collaborative.PNG';
import addons from './addons.png';
import outlook1 from './images/outlook1.png';
import footprint1_icon from './images/footprint1_icon.png';

const Solution = () => {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: "30px" }}>
        <img src={Collaborative} height={250} alt="addons"></img>
      </Row>
      <Row className="justify-content-md-center" style={{ textAlign: "left", backgroundColor: '#5a287d', padding: "10px", marginTop: "20px", color: "white" }}>
        <ul>
          <li> Most of the files/documents we are sharing within organisation to our colleagues.
          </li>
          <li> Whenever collaboration is required between teams or departments or division within our organization, always use respective document’s Confluence or SharePoint/OneDrive/Teams-Channel-Files links so that versions of the file can be maintained, duplicates of the files can be avoided, and further, we can securely share the files.
          </li>
        </ul>
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: "20px", marginBottom: "10px" }}>
        <img src={outlook1} alt="addons"></img>
      </Row>
    </Container>
  )
}

export default Solution