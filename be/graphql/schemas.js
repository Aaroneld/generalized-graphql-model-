const { gql } = require("apollo-server-express");

const typeDefs = gql`

type test {
    id: ID!
    name: String!
}

input inputTest{
    id: ID
    name: String!
}

type Query {
    status: String!
    getAllTest: [test]!
}

`
module.exports = typeDefs