import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

const CardTable = () => {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    fetch("/getCards")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      });
  }, []);

  return (
    <>
      {rows &&
        rows.map((row) => {
          return (
            <Card className="p-3 mb-3">
              <Card.Title>{row.title}</Card.Title>
              <Card.Text>{row.card_description}</Card.Text>
              <Card.Body>
                <Row>
                  <Col>
                    <p className="font-weight-bold">Rezeptnamen</p>
                    <ListGroup>
                      {row.rezepte &&
                        row.rezepte.map((rezept) => {
                          return (
                            <>
                              <ListGroup.Item>{rezept.name}</ListGroup.Item>
                            </>
                          );
                        })}
                    </ListGroup>
                  </Col>
                  <Col>
                    <p className="font-weight-bold">Beschreibungen</p>
                    <ListGroup>
                      {row.rezepte &&
                        row.rezepte.map((rezept) => {
                          return (
                            <>
                              <ListGroup.Item>
                                {rezept.rezept_description ??
                                  rezept.description}
                              </ListGroup.Item>
                            </>
                          );
                        })}
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default CardTable;
