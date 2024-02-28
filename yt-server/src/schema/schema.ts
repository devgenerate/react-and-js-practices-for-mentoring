import { GraphQLList, GraphQLObjectType, GraphQLSchema} from "graphql";
import { UserType, getUsersResolver } from "./user.schema";

export const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        Users: {
            type: new GraphQLList(UserType),
            resolve: getUsersResolver
        }
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery
})
