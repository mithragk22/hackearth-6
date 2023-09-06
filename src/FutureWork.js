import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import futurework1 from './images/futurework1.jpg';
import futurework2_1 from './images/futurework2_1.jpg'
import futurework2_2 from './images/futurework2_2.jpg'

const FutureWork = () => {
    const [v1, setV1] = useState(1)
    const [v2, setV2] = useState(0)
    const [v3, setV3] = useState(0)


    const showV1 = () => {
        setV1(1)
        setV2(0)
        setV3(0)
    }
    const showV2 = () => {
        setV1(0)
        setV2(1)
        setV3(0)
    }
    const showV3 = () => {
        setV1(0)
        setV2(0)
        setV3(1)
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center" style={{ textAlign: "center", backgroundColor: '#5a287d', padding: "10px", marginTop: "30px", color: "white" }}>
                    <table>
                        <tr>
                            <td onClick={showV1}>Green elements 2.0</td>
                            <td onClick={showV2}>Green elements 2.1</td>
                            <td onClick={showV3}>Green elements 2.2</td>
                        </tr>
                    </table>
                </Row>
                {v1 ? <span><Row className="justify-content-md-center" style={{ textAlign: "left", backgroundColor: '#5a287d', padding: "10px", marginTop: "30px", color: "white" }}>
                    <ul>
                        <li> Most of the files/documents we are sharing within organisation to our colleagues.
                        </li>
                        <li> Whenever collaboration is required between teams or departments or division within our organization, always use respective document’s Confluence or SharePoint/OneDrive/Teams-Channel-Files links so that versions of the file can be maintained, duplicates of the files can be avoided, and further, we can securely share the files.
                        </li>
                    </ul>
                </Row>
                    <Row className="justify-content-md-center" style={{ marginTop: "30px" }}>
                        <img src={futurework1} alt="addons"></img>
                    </Row></span> : ""}
                {v2 ? <span><Row className="justify-content-md-center" style={{ textAlign: "left", backgroundColor: '#5a287d', padding: "10px", marginTop: "30px", color: "white" }}>
                    <ul>
                        <li> Most of the files/documents we are sharing within organisation to our colleagues.
                        </li>
                        <li> Whenever collaboration is required between teams or departments or division within our organization, always use respective document’s Confluence or SharePoint/OneDrive/Teams-Channel-Files links so that versions of the file can be maintained, duplicates of the files can be avoided, and further, we can securely share the files.
                        </li>
                    </ul>
                </Row>
                    <Row className="justify-content-md-center" style={{ marginTop: "30px" }}>
                        <Col><img src={futurework2_1} width={525} alt="addons"></img> </Col>
                        <Col><img src={futurework2_2} width={525} alt="addons"></img> </Col>
                        {/* <img src={futurework2} alt="addons"></img> */}
                    </Row></span> : ""}
            </Container>


        </div>
    )
}
export default FutureWork