# Frontend PRO

This is an example of a typical request: A friend of us wants to publish a list of video games and the details. Kind of a blog.

Our inputs are 2 htmls, 1 json containing the DB and one index.js to fetch the data.

## Requirements

We are going to use [servor](https://www.npmjs.com/package/servor) and [json-server](https://www.npmjs.com/package/json-server)

Servor is used to watch files and json-server will automatically add a local DB to Mock our requests.

In some cases, we will be using Postman to add some custom data.

1. Install required devDependencies
```
npm i servor json-server
```

## Run the app

### Servor
To start up servor just run
```
npx servor src --reload
```

The app will be running at http://localhost:8080, for the scope of this project, we will ignore an automatic redirect to index.html

### Json-server
To start the local db running
```
npx json-server --watch ./games/games.json --port 3033
```
