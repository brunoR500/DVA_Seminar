CREATE TABLE IF NOT EXISTS rezept (
  PRIMARY KEY(rezept_id),

  rezept_id       SERIAL            NOT NULL UNIQUE,
  name            VARCHAR(100)      NOT NULL,
  description     VARCHAR(300)      NOT NULL
);

CREATE TABLE IF NOT EXISTS card (
  PRIMARY KEY(card_id),

  card_id          SERIAL          NOT NULL UNIQUE,
  title            VARCHAR(100)    NOT NULL,
  description      VARCHAR(300)    NOT NULL
);

CREATE TABLE card_rezept (
  rezept_id       INT             NOT NULL,
  card_id         INT             NOT NULL,

  FOREIGN KEY (rezept_id) REFERENCES rezept(rezept_id)  ON DELETE CASCADE,
  FOREIGN KEY (card_id)   REFERENCES card(card_id)      ON DELETE CASCADE  
);
