
// call back la gi ?
// 1. La ham
// 2. Duoc truyen qua doi so
// 3. Duoc goi lai

// const data = users.map(function(user){
//     console.log(user)
// })

// const users = new Promise((resolve, reject) => {
//     resolve("ok")
//     reject("no ok")
// })

// users
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

async function get() {
    try {
        const user = await api.getUser('url')
        const posts = await api.getPostsOfUser(user)
        const comments = await api.getCommentsOfPosts(posts)
        console.log(comments)
    } catch (err) {
        console.log(err)
    }
}

// [
//     {
//         status_code: 200,
//         data: [
//             {
//                 "name": "John",
//                 "email": "johnpj@gmail.com",
//                 "age": "20"
//             },
//             {
//                 "name": "Moss",
//                 "email": "mossia@gmail.com",
//                 "age": "23"
//             }
//         ],
//         error_messages: ""
//     }
// ]

// fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, 
//     //origin, origin-when-cross-origin, same-origin, strict-origin, 
//     //strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
// });
// return response.json(); // parses JSON response into native JavaScript objects

/* axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]]) */

// `url` is the server URL that will be used for the request
url: '/users'
// `method` is the request method to be used when making the request
method: 'get' // default
// `baseURL` will be prepended to `url` unless `url` is absolute.
// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
// to methods of that instance.
baseURL: 'https://some-domain.com/api/'
// `params` are the URL parameters to be sent with the request
// Must be a plain object or a URLSearchParams object
params: {
    ID: 12345
}
// `data` is the data to be sent as the request body
// Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
data: {
    firstName: 'Fred'
}
// ...