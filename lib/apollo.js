import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://blog-drupal.sanna.ninja/graphql',
  cache: new InMemoryCache()
});
