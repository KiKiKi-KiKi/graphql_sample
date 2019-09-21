import React from 'react';
import { useQuery } from '@apollo/react-hooks';
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
  const { loading, error, data } = useQuery(query);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.toString()}</p>;
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
  );
}

export default App;
