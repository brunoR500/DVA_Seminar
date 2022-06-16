import { useState } from "react";
import { ListGroup, Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const CreateCard = () => {
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();

  const createCardAsync = async (name, description) => {
    if (
      name &&
      description &&
      name !== "" &&
      description !== "" &&
      recipes.length > 0
    ) {
      await fetch(
        "/createCard?name=" +
          name +
          "&description=" +
          description +
          "&ids=" +
          recipes.map((recipe) => recipe.rezept_id ?? recipe._id)
      );
      history.push("/");
    }
  };

  const addRecipe = (recipe) => setRecipes([...new Set([...recipes, recipe])]);

  return (
    <>
      <SearchRecipeField addRecipe={(recipe) => addRecipe(recipe)} />
      <CreateCardForm createCardForm={createCardAsync}>
        {recipes.length > 0 && <p>Rezepte</p>}
        <ListGroup>
          {recipes.map((recipe) => (
            <ListGroup.Item>{recipe.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </CreateCardForm>
    </>
  );
};

const CreateCardForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label className="Label">Card Name</Form.Label>
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
        {props.children}
        <div className="text-right">
          <Button
            className="btn btn-primary ml-2 mt-3"
            onClick={() => props.createCardForm(name, description)}
          >
            Erstellen
          </Button>
        </div>
      </Form>
    </>
  );
};

const SearchRecipeField = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchAsync = () => {
    if (search && search !== "") {
      fetch("/search?name=" + search)
        .then((response) => response.json())
        .then(setResults);
    }
  };

  return (
    <>
      <Form className="mb-2">
        <Row>
          <Col>
            <Form.Control
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Col>
          <Col>
            <Button onClick={searchAsync}>Search</Button>
          </Col>
        </Row>
      </Form>

      <ListGroup>
        {results.map((recipe) => {
          return (
            <>
              <ListGroup.Item onClick={() => props.addRecipe(recipe)}>
                {recipe.name}
              </ListGroup.Item>
            </>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CreateCard;
