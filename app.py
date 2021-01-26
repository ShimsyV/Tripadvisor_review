# import necessary libraries
import os
import numpy as np
import psycopg2

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,
    url_for)

from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
# postgres:postgres://avsrkdqtegxzjr:83afd61ef5b5b621120d83a053790a28f83ee6d60be17f55c4b19410737f0771@ec2-52-22-238-188.compute-1.amazonaws.com:5432/dcve1h312v0e62
try:
    db_uri = os.environ['DATABASE_URL']
except KeyError:
    db_uri = "postgres://postgres:postgres@sj-db-1.ctg25floyats.us-east-2.rds.amazonaws.com/Hotel_Reviews_db"

print(db_uri)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri

db = SQLAlchemy(app)


################################################
# Database Setup
################################################

# create class to frame each drug instance:

class hotel_reviews(db.Model):
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.String(64))
    address = db.Column(db.String(64))
    city = db.Column(db.String(64))
    country = db.Column(db.String(64))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    name = db.Column(db.String(64))
    postalcode = db.Column(db.String(64))
    province= db.Column(db.String(64))
    reviews_rating=db.Column(db.Integer)
    reviews_sourceURLs=db.Column(db.String(64))
    keywords=db.Column(db.String(64))
   
# def  __repr__(self):
#     return '<Drugs %r>' % (self.state)

#################################################
# Flask Routes
#################################################
@app.route("/routes")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/reviewsall<br/>"
                
        )
# #################################################
# # Rendering the Template
# #################################################
@app.route("/")     
def enter_data(): 
    return render_template("index.html")

#################################################
# State Route
#################################################
@app.route("/api/v1.0/reviewsall")

def reviewsall():

    results = db.session.query(hotel_reviews).all()
    dataReturn=[]
    for data in results:
        reviewsdict={
            "id": data.id,
            "hotel_id": data.hotel_id,
            "address": data.address,
            "city": data.city,
            "country": data.country,
            "latitude": data.latitude,
            "longitude": data.city,
            "name": data.name,
            "postalcode": data.postalcode,
            "province":data.province,
            "reviews_rating":data.reviews_rating,
            "reviews_sourceURLs": data.reviews_sourceURLs,
            "keywords": data.keywords
        }

        dataReturn.append(reviewsdict)
    return jsonify(dataReturn)


if __name__ == "__main__":
    app.debug = True
    app.run()
    
    
    
