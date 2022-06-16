import express from "express";
//import * as db from "./sql.js";
import * as db from "./nosql.js";

const app = express();

app.get("/getRecipes", async (req, res) => res.json(await db.getRecipes()));

app.get("/search", async (req, res) =>
  res.json(await db.search(req.query.name))
);

app.get("/createRecipe", async (req, res) => {
  await db.createRecipe(req.query.name, req.query.description);
  res.sendStatus(200);
});

app.get("/createCard", async (req, res) => {
  await db.createCard(
    req.query.name,
    req.query.description,
    req.query.ids.split(",")
  );
  res.sendStatus(200);
});

app.get("/getCards", async (req, res) => res.json(await db.getCards()));

app.listen(30000, () => console.log("App listening on port 30000 🚀🔥"));
