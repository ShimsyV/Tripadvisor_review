-- Delete the table "hotel_review"
DROP TABLE hotel_review;

-- Re-create the table "hotel_review" within hotel_review_db
CREATE TABLE hotel_review (
  id SERIAL PRIMARY KEY,
  address VARCHAR,
  city VARCHAR,
  country VARCHAR,
  latitude DEC,
  longitute DEC, 
  name VARCHAR,
  postalCode VARCHAR,
  province VARCHAR,
  reviews_rating INT,
  reviews_text VARCHAR,
  reviews_title VARCHAR,
  sourceURLs VARCHAR
);

-- Query all fields from the table
SELECT *
FROM hotel_review;
