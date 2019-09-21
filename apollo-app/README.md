# GraphQL with React

ref. https://qiita.com/seya/items/e1d8e77352239c4c4897

## set up

### Create GitHub API token

get token [https://github.com/settings/tokens](https://github.com/settings/tokens)

1. Generate New Tokens
1. ✓ public repo
1. add description
1. generate token

```sh
$ touch .env
```

`.env`
```
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=<GitHub API token>
```

## install GraphQL & Apollo packages

```sh
$ yarn add apollo-boost react-apollo graphql-tag graphql
```

- `apollo-boost` ... Quick start to use Apollo  
  cf. https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost
- ~~`react-apollo` ... React - GrapthQL クエリの繋ぎこみをサポート  
  cf. https://github.com/apollographql/react-apollo~~
- `@apollo/react-hooks` ... React hooks  
  cf. https://www.apollographql.com/docs/react/essentials/get-started/
- `graphql-tag` ... GraphQLクエリをテンプレートリテラルでかけるようにする  
  cf. https://github.com/apollographql/graphql-tag
- `graphql` ... cf.  
  - https://www.npmjs.com/package/graphql  
  - https://github.com/graphql/graphql-js

## @apollo/react-hooks

ref. https://www.apollographql.com/docs/react/essentials/get-started/

### `ApolloProvider`

> The `ApolloProvider` is similar to React's `Context.Provider`. It wraps your React app and places the client on the context, which allows you to access it from anywhere in your component tree.

### `useQuery` (Custom Hook)

> Once your `ApolloProvider` is hooked up, you're ready to start requesting data with the `useQuery` hook!

> First, pass your GraphQL query wrapped in the `gql` function into the `useQuery` hook. When your component renders and the `useQuery` hook runs, a result object will be returned containing `loading`, `error`, and `data` properties. Apollo Client tracks error and loading state for you, which will be reflected in the `loading` and `error` properties. Once the result of your query comes back, it will be attached to the `data` property.

```js
const { loading, error, data } = useQuery( gqlQuery );
```

`useQuery` に GraphQL の query を渡すカスタムフック  
Apollo Client は query の結果をトラッキングする

- `loading` ... ロード中
- `error` ... エラーが返された
- `data` ... queryの結果が返ってきたら `data` に割り当てられる


# create react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
