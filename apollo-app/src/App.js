import React from 'react';
import { Query } from 'react-apollo';
import ggl from 'graphql-tag';
import './App.css';

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

function App() {
  return (
    <Query query={query}>
      {({ loading, data }) => {
        if ( loading ) {
          return <p>Loading...</p>
        }

        const repositories = data.organization.repositories.nodes;

        return (
          <ul>
            {
              repositories.map(repo => (
                <li key={repo.id}>
                  <a href={repo.url} target="_blank" rel="noopener">
                    {repo.name}
                  </a>
                  <span>{repo.stargazers.totalCount} Stars</span>
                </li>
              ))
            }
          </ul>
        )
      }}
    </Query>
  );
}

export default App;
