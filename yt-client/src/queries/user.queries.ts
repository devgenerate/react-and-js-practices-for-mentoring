import { gql } from "@apollo/client";

export const getUsers = gql`
    query getUsers {
        Users {
            id
            name
            email
            website
            company {
                name
            }
        }
    }
`
