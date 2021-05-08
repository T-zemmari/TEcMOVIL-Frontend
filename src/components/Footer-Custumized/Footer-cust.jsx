import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';


const FooterCust = () => {
    return <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; TecMovil
                </Col>
            </Row>
        </Container>
    </footer>
}

export default FooterCust