import React from 'react';
import Container from '../container/container';
import Row from '../row/row';
import Col from '../column/col';
import Image from '../image/image';

export default function About() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="../../../public/assets/AboutImg/171x180" roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}
