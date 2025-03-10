import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { FetchError } from '../client/types';

export type GraphQLClient = ApolloClient<NormalizedCacheObject>;
export type GraphQLClientError = Pick<FetchError, 'error' | 'message'>;

const defaultOptions: DefaultOptions = {
  mutate: {
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export function createGraphQLClient(uri: string, token: string): GraphQLClient {
  return new ApolloClient({
    uri,
    defaultOptions,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Language': 'fi',
    },
  });
}

export async function resetClient(graphQLClient: GraphQLClient): Promise<void> {
  graphQLClient.stop();
  await graphQLClient.resetStore();
}
