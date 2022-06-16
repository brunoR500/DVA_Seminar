import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const CreateRecipeForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const createRecipeAsync = async () => {
    await fetch(`/createRecipe?name=${name}&description=${description}`);
    history.push("/");
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label className="Label">Rezept Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschreibung</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <div className="text-right">
          <Button className="btn btn-primary ml-2" onClick={createRecipeAsync}>
            Erstellen
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CreateRecipeForm;
