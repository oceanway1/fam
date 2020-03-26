CREATE TABLE family_members (
 id serial PRIMARY KEY,
 first VARCHAR(100),
 last VARCHAR(100),
 email text UNIQUE NOT NULL,
 phone VARCHAR(100),
 location VARCHAR(100),
 risk_factor VARCHAR(100),
 added TIMESTAMP 
);

