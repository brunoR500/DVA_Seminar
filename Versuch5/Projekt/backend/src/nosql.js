import MongoClient from "mongodb";
import { createRequire } from "module";
import { DATABASE_HOST } from "./config.js";
const require = createRequire(import.meta.url);
var ObjectId = require("mongodb").ObjectID;

const url = "mongodb://" + DATABASE_HOST + ":27017/rezept";

let rezepte, cards;

MongoClient.connect(url, (err, db) => {
  rezepte = db.db("rezepteDb").collection("rezepte");
  cards = db.db("rezepteDb").collection("cards");
});

export const getRecipes = async () => (await rezepte.find().toArray()) ?? [];

export const search = async (value) =>
  await rezepte.find({ name: { $regex: value } }).toArray();

export const createRecipe = (name, description) =>
  rezepte.insertOne({ name: name, description: description });

export async function createCard(name, description, recipeIds) {
  cards.insertOne({
    title: name,
    card_description: description,
    rezepte: await rezepte
      .find({ _id: { $in: recipeIds.map((id) => new ObjectId(id)) } })
      .toArray(),
  });
}

export const getCards = async () => (await cards.find().toArray()) ?? [];
