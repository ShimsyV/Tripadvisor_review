# Analyzing the Language of Hotel Reviews

![img](https://github.com/jebreensa/Project-3_Group1/blob/main/text_reviews.PNG)

### Group Members:

*Justin Chow*

*Sam Jabreen*

*Shimsy Varkey*

*Zhanna Kirbakayeva*

# Summary

Guest reviews are becoming a prominent factor affecting people’s bookings/purchases. When you were looking for a place to stay for a vacation or purchase anything online, what did you do? You checked the reviews before you made your decision. Guest reviews clearly influence people’s booking decision, which means, you will need to take notice to what people are saying about the hotel!

Using the reviews of hotels from tripadvisor, we analsysed the text of the reviews by various guests(about 10,000 reviews). The project can be viewed [here](https://s3.us-east-2.amazonaws.com/www.myawesomehotelreviews.com/index.html)

# Data source

The data can be found [here](https://www.kaggle.com/datafiniti/hotel-reviews?select=Datafiniti_Hotel_Reviews_Jun19.csv). This dataset consists of 10,000 reviews over 1400 different hotels within the United States ranging between years 2014 through 2019.

# Technologies involved:

* Pandas for data cleaning

* Python Flask server

* Postgres SQL database hosted in AWS

* HTML, CSS, Bootstrap, JavaScript and Tableau for data visualization and user interactivity

* Machine Learning to analyze the data

* Deployment on AWS using RDS and S3

## Data Cleaning

We first read the data which contained 10000 rows and 27 columns. From which we reduced to 12 columns that we required for the analysis. Also removed any duplicated and null rows. 

## SQL database

We created a SQL database for the table. We hosted a postgres SQL database on AWS. 

## Machine learning

![img](https://github.com/jebreensa/Project-3_Group1/blob/main/templates/static/NLP%20Process.svg)

The Natural Language Processing (NLP) was used to read, analyze and understand the human language and interpret it into a way that computers can interact. We utilized the scikit-learn package to apply the preprocessing steps and the K means clustering process to the texts. 

After machine clustering has been applied to the aggregated text, the most common words within the clusters were extracted and applied to each hotel review with the intention of capturing overall customer sentiment.

![img](https://github.com/jebreensa/Project-3_Group1/blob/main/geography_clusters.PNG)

# Tableau

We used tableau for mapping and visualizations. The link to public tableau workbook can be found [here](https://public.tableau.com/profile/zhanna5069#!/vizhome/zhanna6/Dashboard14?publish=yes)

![img](https://github.com/jebreensa/Project-3_Group1/blob/main/map_image.PNG)

# Conclusions

Customer reviews regarding hotels tends to organize around either geography or experience.

![img](https://github.com/jebreensa/Project-3_Group1/blob/main/keywords_cluster.PNG)

# Limitations

* We started off with 10,000 reviews. After discarding duplicates and removing any reviews that had less than 10, we had to work with 8136 reviews. 

* We had to choose only 25 clusters. 

The "Elbow method", a method of analyzing the variance-squared for each series of K-clusters was attempted to be applied, but there was no satisfying result within the testing range of 1 through 100 K-clusters. This could have been expanded, but the calculation took well over 3 hours to run. In the interest of time, 25 was chosen. 

* During the pre-processing stage and subsequent clustering, some words appeared truncated. Either the stemming process or the tokenizer was consistently transforming words incorrectly. Further experimentation will alleviate this.


### List of Working Files for reconstructing project
source data:
Resources/Datafiniti_Hotel_Reviews_Jun19.csv

Processing files:
1) data_cleaning_sql.ipynb
2) Machine_learning_try1.ipynb (requires utils.py)
3) plotly graphs.ipynb

Flask app:
app.py

Frontend website startpoint:
templates/index.html
