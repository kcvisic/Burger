DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers
(
	 id SERIAL PRIMARY KEY,
	 burger_name VARCHAR(100) NULL,
	 devoured BOOLEAN DEFAULT false,
	 date  TIMESTAMP
)