import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import futurework1 from './images/futurework1.jpg'

const FutureWork = () => {
    return (
        <div>
             <Container>
            <Row className="justify-content-md-center" style={{textAlign:"left",backgroundColor:'#5a287d',padding:"10px",marginTop:"30px",color:"white"}}>
                <ul>
                    <li> Most of the files/documents we are sharing within organisation to our colleagues.
                    </li>
                    <li> Whenever collaboration is required between teams or departments or division within our organization, always use respective document’s Confluence or SharePoint/OneDrive/Teams-Channel-Files links so that versions of the file can be maintained, duplicates of the files can be avoided, and further, we can securely share the files.
                    </li>
                </ul>
            </Row>
            <Row className="justify-content-md-center" style={{marginTop:"30px"}}>
            <img  src={futurework1} alt="addons"></img>
            </Row>
            </Container>
               
            
        </div>
    )
}
export default FutureWork