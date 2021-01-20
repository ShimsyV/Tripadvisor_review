-- Delete the table "review"
DROP TABLE review;

-- Re-create the table "review" within hotel_db
CREATE TABLE review (
  id INT PRIMARY KEY,
  hotel_id VARCHAR,
  address VARCHAR,
  city VARCHAR,
  country VARCHAR,
  latitude FLOAT,
  longitude FLOAT, 
  name VARCHAR,
  postalCode VARCHAR,
  province VARCHAR,
  reviews_rating INT,
  reviews_sourceURLs TEXT  
);

SELECT * 
FROM review;
