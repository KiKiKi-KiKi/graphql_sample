const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String,
    course(id: Int!): Course
    courses(topic: String): [Course]
  },
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

module.exports = schema;
