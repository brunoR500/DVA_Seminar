import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecipeForm from "./components/CreateRecipeForm";
import RecipeTable from "./components/RecipeTable";
import CardTable from "./components/CardTable";
import SQLNavbar from "./components/Navbar";
import CreateCard from "./components/CreateCardForm";

ReactDOM.render(
  <BrowserRouter>
    <SQLNavbar />
    <div className="m-5">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <h2>Rezepte</h2>
              <RecipeTable />
              <h2>Cards</h2>

              <CardTable />
            </>
          )}
        />
        <Route path="/createCard" component={CreateCard} />
        <Route path="/createRecipe" component={CreateRecipeForm} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

/*
    <div className="p-5">
      <CreateRecipeForm />
      <CreateCardPage />
    </div>*/
