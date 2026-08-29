import { Col, Container, Row } from "react-bootstrap";
import { HomeMain } from "../component/HomeMain";
import { HomeLeft } from "../component/HomeLeft";
import { HomeRight } from "../component/HomeRight";

export const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={3} className="bg-light p-3">
                        <HomeLeft />
                    </Col>
                    <Col xs={12} md={8} lg={6} className="bg-white p-lg-3 ">
                        <HomeMain />
                    </Col>
                    <Col xs={12} md={4} lg={3} className="bg-light p-3">
                        <HomeRight />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
