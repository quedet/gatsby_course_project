const axios = require("axios")

exports.createPages = async ({ actions: { createPage } }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data

    data.forEach( async (user) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        const userPosts = response.data

        createPage({
            path: `/users/${user.id}`,
            component: require.resolve('./src/templates/user.jsx'),
            context: {user, posts: userPosts}
        })
    });

    createPage({
        path: "/users",
        component: require.resolve("./src/templates/users.jsx"),
        context: {
            users: data
        }
    })
}