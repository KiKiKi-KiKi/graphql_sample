# GraphQL express simple server

ref. https://dev.classmethod.jp/server-side/node-js-server-side/graphql-tutorial-nodejsexpress/

```sh
$ yarn add graphql express express-graphql
```

## use GraphQL by Express

```javascript
const express = require('express');
const expressGraphQL = require('express-graphql');

// Root resolver
const root {
  message: () => 'Hello GraphQL!',
};

const app = express();
const port = 4000;

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Express GraphQL Server Running On localhost:${port}/graphql`);
});
```

## Run server

```sh
$ yarn run start
```

### send Query

```query
{
  message
}
```

↓ return `message`

```json
{
  "data": {
    "message": "Hello GraphQL!"
  }
}
```
