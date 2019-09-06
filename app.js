const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver
const root = {
  message: () => 'Hello GraphQL!'
};

// Create express server
const app = express();
const port = 4000;

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log('Express GraphQL Server Running On localhost:4000/graphql');
});