
# restful-api-starter 🚀
[![Build Status](https://travis-ci.com/ImraanMeyer/restful-api-starter.svg?branch=master)](https://travis-ci.com/ImraanMeyer/restful-api-starter)

* Express Restful API starter kit
* This Server makes use of a JSON database

## Installation

Git clone this repository: 
https://github.com/ImraanMeyer/restful-api-starter.git

### Running The Server

Install Modules:
```
npm install || yarn
```
Start Server:
```
npm start || yarn start
```
Start Server (Nodemon):
```
npm run server || yarn server
```

## Routes
```
# Get ALL posts
GET http://localhost:5050/api

###

# Get Specific Post
GET http://localhost:5050/api/1


###

# Create New Post
POST http://localhost:5050/api/new
Content-Type: application/json

{
    "title": "Second Post",
    "description": "Sucesss",
    "URL": "https://github.io/ImraanMeyer"
}

### 

# Delete Specific Post
DELETE http://localhost:5050/api/2

###

# Edit Specific Post
PUT  http://localhost:5050/api/2
Content-Type: application/json

{
    "title": "Second Post Edit",
    "description": "Sucesss",
    "URL": "https://github.io/ImraanMeyer"
}
```
------

## License
[MIT](https://choosealicense.com/licenses/mit/)