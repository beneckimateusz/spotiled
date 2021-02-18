import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { baseApiUrl } from './lib/consts';

const httpLink = createHttpLink({
  uri: baseApiUrl,
  credentials: 'include',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
