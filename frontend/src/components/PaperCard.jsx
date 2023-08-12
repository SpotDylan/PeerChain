import React from "react";
import Card from "react-bootstrap/Card";
import "./PaperCard.css";

const PaperCard = ({ title, authors, description, cardId }) => {
  return (
    <a className={"cardLink"} href={"/card_page/" + cardId}>
      <Card style={{ width: "18rem" }} id={"paperCard"} className={"mb-3"}>
        <Card.Img
          variant="top"
          src="https://thumbs.dreamstime.com/b/science-lab-chemicals-14262437.jpg"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {authors.join(", ")}
          </Card.Subtitle>
          <Card.Text>
            {/* {description} */}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default PaperCard;
