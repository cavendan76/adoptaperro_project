import Badge from "react-bootstrap/Badge";

export const Tags = ({ colorButton, textButton }) => {
  return (
    <>
      <Badge pill bg={colorButton}>{textButton}</Badge>
    </>
  );
};
