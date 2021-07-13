const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongodb = require('./database/connect');
const schema = require('./schema');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

mongodb(); // running mongodb

app.listen(port);
console.log(`server running on port ${port}`);
