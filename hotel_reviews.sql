-- Delete the table "review"
DROP TABLE review;

-- Re-create the table "review" within hotel_db
CREATE TABLE review (
  id INT,
  address VARCHAR,
  city VARCHAR,
  country VARCHAR,
  latitude FLOAT,
  longitude FLOAT, 
  name VARCHAR,
  postalCode VARCHAR,
  province VARCHAR,
  reviews_rating INT,
  reviews_sourceURLs VARCHAR,
  reviews_title VARCHAR  
);

-- Query all fields from the table
SELECT *
FROM review;