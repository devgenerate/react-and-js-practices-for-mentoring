import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { UserType, getUsersResolver, updateUsernameResolver } from "./user.schema";

export const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        Users: {
            type: new GraphQLList(UserType),
            resolve: getUsersResolver
        }
    }
})

export const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        UpdateUsername: {
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString }
            },
            type: GraphQLString,
            resolve: updateUsernameResolver
        }
    }
})

export const schema = new GraphQLSchema({
    mutation: RootMutation,
    query: RootQuery
})
