import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { baseApiUrl } from './config';

const httpLink = createHttpLink({
  uri: baseApiUrl,
  credentials:
    process.env.NODE_ENV === 'production' ? 'same-origin' : 'include',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
