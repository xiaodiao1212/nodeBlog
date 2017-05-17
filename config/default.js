module.exports = {
    port: 3002,
    session: {
        secret: 'nodeBlog',
        key: 'nodeBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/nodeBlog'
}