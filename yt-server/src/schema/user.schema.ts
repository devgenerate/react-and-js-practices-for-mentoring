import { GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../modules/user/domain/user";
import { UserApi } from "../modules/user/infrastructure/user-api";

const userApi = new UserApi();

const UserGeoType = new GraphQLObjectType<User['address']['geo']>({
    name: 'UserGeoType',
    fields: {
        lat: { type: GraphQLString },
        lng: { type: GraphQLString }
    }
})

const UserAddressType = new GraphQLObjectType<User['address']>({
    name: 'UserAddressType',
    fields: {
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        geo: { type: UserGeoType }
    }
})

const UserCompanyType = new GraphQLObjectType<User['company']>({
    name: 'UserCompanyType',
    fields: {
        name: { type: GraphQLString },
        catchPhrase: { type: GraphQLString },
        bs: { type: GraphQLString }
    }
})

export const UserType = new GraphQLObjectType<User>({
    name: 'UserType',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: UserAddressType },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
        company: { type: UserCompanyType }
    }
})

export const UpdateUserNameArgsType = new GraphQLInputObjectType({
    name: 'UpdateUserNameArgsType',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    }
})

export async function getUsersResolver() {
    return userApi.getUsers();
}

export async function updateUsernameResolver(_: unknown, { id, name }: { id: number, name: string }) {
    userApi.updateName(id, name)
}
