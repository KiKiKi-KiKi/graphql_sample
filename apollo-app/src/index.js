import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import ggl from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    });
  },
});

const query = ggl`{
  organization(login: "apollographql") {
    repositories(first: 5) {
      nodes {
        id
        name
        url
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
}`;

client
  .query({
    query
  })
  .then(res => console.log(res));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
