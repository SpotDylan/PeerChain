import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { papers } from "../../papersInfo";

const CardPage = () => {
  let { cardId } = useParams();
  const paper = papers[cardId];
  return (
    <Container>
      <Row>
        <Card className={"mb-3"}>
          <Card.Body>
            <Card.Title>{paper.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {paper.authors.join(", ")}
            </Card.Subtitle>
            <Card.Text>{paper.description}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className={"mb-3"}>
          <Card.Body>
            <Card.Title>PDF</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className={"mb-3"}>
          <Card.Body>
            <Card.Title>Paper Contract</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CardPage;
