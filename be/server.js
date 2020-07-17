const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers/index.js');

const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

const path = '/graphql'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        path: path,
        settings: {
            'editor.theme': "dark"
        }
    }
});


server.applyMiddleware({app, path});

module.exports = app;


