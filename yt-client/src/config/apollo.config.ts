import { User } from '@/modules/user/domain/user';
import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const usersVar = makeVar<User[]>([])

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
