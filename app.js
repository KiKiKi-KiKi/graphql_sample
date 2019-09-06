const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./src/graphql-schema');
const coursesData = require('./src/db');

// get queries
const getCourse = function(args) {
  const id = args.id;
  return coursesData.filter(course => {
    return course.id == id;
  })[0];
}

const getCourses = function(args) {
  if ( args.topic ) {
    const topic = args.topic;
    return coursesData.filter(course => {
      return course.topic === topic;
    });
  } else {
    return coursesData;
  }
}

// Root resolver
const root = {
  message: () => 'Hello GraphQL!',
  course: getCourse,
  courses: getCourses,
}

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