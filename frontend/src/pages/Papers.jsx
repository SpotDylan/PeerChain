import React from "react";
import PaperCard from "../components/PaperCard";
import { Container, Row, Col } from "react-bootstrap";
import { papers } from "../../papersInfo";

const Papers = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {papers.map((paper, idx) => {
            return (
              <Col md="auto">
                <PaperCard {...paper} cardId={idx} />
              </Col>
            );
          })}
          <Col>
            {/* <PaperCard
              authors={["Troy", "Dylan", "Jacob"]}
              description={"lorem ipsum"}
              title={"LK-99 Superconductor"}
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Papers;
