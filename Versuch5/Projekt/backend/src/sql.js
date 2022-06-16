import pg from "pg";
import { DATABASE_HOST } from "./config.js";

const client = new pg.Client({
  host: DATABASE_HOST,
  port: 5432,
  user: "localdb",
  password: "localdb",
  database: "recipe",
});

await client.connect();

export async function getRecipes() {
  const result = await client.query("SELECT * FROM rezept");
  return result.rows;
}

export async function search(value) {
  const result = await client.query("SELECT * FROM rezept WHERE name LIKE $1", [
    "%" + value + "%",
  ]);
  return result.rows;
}

export async function createRecipe(name, description) {
  await client.query("INSERT INTO rezept (name, description) VALUES ($1, $2)", [
    name,
    description,
  ]);
}

export async function createCard(name, description, recipeIds) {
  const result = await client.query(
    "INSERT INTO card (title, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  const cardId = result.rows[0].card_id;
  recipeIds.forEach(async (recipeId) => {
    return await client.query(
      "INSERT INTO card_rezept (card_id, rezept_id) VALUES ($1, $2)",
      [cardId, recipeId]
    );
  });
}

export async function getCards() {
  const rows = (
    await client.query(`
    SELECT card.card_id, card.title, card.description as card_description, rezept.name, rezept.description as rezept_description
    FROM card_rezept
    FULL OUTER JOIN card ON card.card_id = card_rezept.card_id
    LEFT JOIN rezept ON rezept.rezept_id = card_rezept.rezept_id`)
  ).rows;
  const result = [];
  const cardIds = new Set(rows.map((row) => row.card_id));
  cardIds.forEach((cardId) => {
    const card = {};
    rows.forEach((row) => {
      if (row["card_id"] === cardId) {
        card["title"] = row["title"];
        card["card_description"] = row["card_description"];
      }
    });
    const rezepte = rows
      .filter((row) => row["card_id"] === cardId)
      .map((row) => {
        return {
          name: row["name"],
          rezept_description: row["rezept_description"],
        };
      });
    card["rezepte"] = rezepte;
    result.push(card);
  });
  return result;
}
