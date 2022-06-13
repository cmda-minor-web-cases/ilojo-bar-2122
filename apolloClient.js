import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client"

const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl46w5gy82law01z32y725r25/master",
    cache: new InMemoryCache(),
})

export default client;