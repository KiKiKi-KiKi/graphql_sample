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

Access to `localhost:4000/graphql`

## GraphQL Schema

### get query

```js
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  },
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

// get functions 
const getCourse = function(args) {...}
const getCourses = function(args) {...}

// Root resolver
const root = {
  course: getCourse,
  courses: getCourses,
};
```

e.g.  
**Get course by CourseID**

`query`
```query
query getSingleCourse($courseID: Int!) {
 course(id: $courseID) {
  title
  author
  description
  topic
  url
 }
}
```
`params`
```json
{
  "courseID": 1
}
```

**Get Courses by topic**

`query`
```query
query getCourses($topic: String!) {
 courses(topic: $topic) {
  title
  url
 }
}
```
`params`
```json
{
  "topics": "Node.js"
}
```

### update query

create `Type Mutation` schema for update 

```js
// add schema to type Mutation & update query method
const schema = buildSchema(`
  ...
  type Mutation {
    updateCourseTopic(id: Int!, topic: String): Course
  },
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

// Add update method
const updateCourseTopic = function({id, topic}) {
  ...
  return course;
};

// Add endpint
const root = {
  ...
  updateCourseTopic: updateCourseTopic,
}
```

## Express CORS

CORS: Cross-origin resource sharing

ref. 
- https://www.npmjs.com/package/cors
- https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

### cors

```sh
$ npm install cors
```

##### すべてのAPIをCORS許可したい場合

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/user/:userId', function (req, res, next) {
  res.json({result: '任意のオリジンからすべてのAPIがアクセスOK'})
})
```

##### 個別のAPIをCORS許可したい場合

エンドポイントの第二引数に `cros()` を渡す

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.get(
  '/user/:userId',
  cors(),
  function (req, res, next) {
    res.json({result: '任意のオリジンからこのAPIのみアクセスOK'})
  }
);
```

##### CORS options

- origin
- methods
- allowedHeaders
- exposedHeaders
- credentials
- maxAge
- preflightContinue
- optionsSuccessStatus
