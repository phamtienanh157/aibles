const users = new Promise((resolve, reject) => {
    resolve("ok")
    reject("no ok")
})

users
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })


[
    {
        status_code: 200,
        data: [
            {
                "name": "John",
                "email": "johnpj@gmail.com",
                "age": "20"
            },
            {
                "name": "Moss",
                "email": "mossia@gmail.com",
                "age": "23"
            }
        ],
        error_messages: ""
    }
]

fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, 
    //origin, origin-when-cross-origin, same-origin, strict-origin, 
    //strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return response.json(); // parses JSON response into native JavaScript objects

/* axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]]) */