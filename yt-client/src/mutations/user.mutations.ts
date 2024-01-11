import { gql } from "@apollo/client";

export const updateUsername = gql`
    mutation UpdateUsername($id: Int, $name: String) {
        UpdateUsername(id: $id, name: $name)
    }
`
