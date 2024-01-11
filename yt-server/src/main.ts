import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { VideosApi } from './modules/video/infrastructure/videos-api';

const videosApi = new VideosApi()

const typeDefs = `
  type Video {
    uid: String
    id: String
    url: String
    thumbnail: String
  }

  type Query {
    getVideos: [Video]
  }
`;

const resolvers = {
    Query: {
      getVideos: () => videosApi.fetch(),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);


