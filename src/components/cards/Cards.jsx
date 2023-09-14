import "./cards.css";
import { Card } from "react-bootstrap";
import { Tags } from "../tags/Tags"

export const Cards = ({ image, title, text, colorButton, textButton }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} width="300px" height="300px"/>
        <Card.Body className="cards">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Tags colorButton={colorButton} textButton={textButton} />
        </Card.Body>
      </Card>
    </>
  )
}
