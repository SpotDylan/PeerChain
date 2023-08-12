import React from "react";
import PaperCard from "../components/PaperCard";
import { Container, Row, Col } from "react-bootstrap";

const Papers = () => {
  const cards = [
    {
      authors: ["Troy", "Dylan", "Jacob"],
      description: "Lorem Ipsum",
      title: "LK-99 Superconductor",
    },
    {
      authors: ["Troy", "Dylan", "Jacob"],
      description: "Lorem Ipsum",
      title: "LK-99 Superconductor",
    },
    {
      authors: ["Troy", "Dylan", "Jacob"],
      description: "Lorem Ipsum",
      title: "LK-99 Superconductor",
    },
    {
      authors: ["Troy", "Dylan", "Jacob"],
      description: "Lorem Ipsum",
      title: "LK-99 Superconductor",
    },
    {
      authors: ["Troy", "Dylan", "Jacob"],
      description: "Lorem Ipsum",
      title: "LK-99 Superconductor",
    },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          {cards.map((card, idx) => {
            return (
              <Col md="auto">
                <PaperCard {...card} cardId={idx} />
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
