import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import ggl from 'graphql-tag';
import './App.css';

const GET_RIPOSITORIES = ggl`{
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

const ADD_STAR_REPOSITORY = ggl`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const REMOVE_STAR_REPOSITORY = ggl`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

function AddStarButton({ id }) {
  const [addstar, { loading }] = useMutation(ADD_STAR_REPOSITORY);

  if ( loading ) {
    return <button disabled>&#9733; Loading...</button>
  }

  return <button onClick={ e => {
    e.preventDefault();
    addstar({ variables: { id } })
  }}>&#9734;</button>
}

function RemoveStarButton({ id }) {
  const [unstar, { loading }] = useMutation(REMOVE_STAR_REPOSITORY);

  if ( loading ) {
    return <button disabled>&#9731; Loading...</button>
  }

  return <button onClick={ e => {
    e.preventDefault();
    unstar({ variables: { id } })
  }}>&#9733;</button>
}

function StarButton({ id, hasStarred }) {
  console.log(hasStarred)
  if ( hasStarred ) {
    return <RemoveStarButton id={id} />
  } else {
    return <AddStarButton id={id} />
  }
}

function App() {
  const { loading, error, data } = useQuery(GET_RIPOSITORIES);
  
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
            <StarButton
              id={repo.id}
              hasStarred={repo.viewerHasStarred}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default App;
