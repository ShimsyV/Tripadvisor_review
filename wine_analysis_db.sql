-- Drop table if exists
DROP TABLE wine_data;

CREATE TABLE wine_data (  
  country VARCHAR,
  description VARCHAR,
  points INT,
  price INT,
  province VARCHAR,
  region_1 VARCHAR,
  variety VARCHAR
);

-- Check data import
SELECT *
FROM wine_data;

-- Add primary key
ALTER TABLE wine_data
ADD COLUMN id SERIAL PRIMARY KEY;