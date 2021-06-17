// axios.get('/user?ID=12345')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });


axios.defaults.baseURL = 'https://60becf8e6035840017c17a48.mockapi.io/api';

// axios.get('/users')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

/* axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]]) */


/* function getUserAccount() {
    return axios.get('/user/12345');
}
 
function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}
 
axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        // Tất cả request đều đã được thực hiện xong
    })); */


function getData() {
    axios.get('/users')
        .then(function (response) {
            appendData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
getData()

function appendData(users) {
    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ''
    // for (let i = 0; i < users.length; i++) {
    //     let e = `
    //     <tr key=${i}>
    //         <th scope="row">${users[i].id}</th>
    //         <td>${users[i].name}</td>
    //         <td>${users[i].email}</td>
    //         <td>${users[i].city}</td>
    //     </tr>
    //     `
    //     tbody.innerHTML += e
    // }

    users.map((user, index) =>
        tbody.innerHTML += (`
        <tr key=${index}>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.city}</td>
        </tr>
        `
        ))
}

const user = document.getElementsByClassName("form-control")

function handleAddUser() {
    const name = user[0].value
    const email = user[1].value
    const city = user[2].value
    console.log(name)
    if (name.length === 0 || email.length === 0 || city.length === 0) {
        alert("You must complete the input !!!")
    }
    else {
        axios.post('/users', {
            name: name,
            avatar: "https://cdn.fakercloud.com/avatars/d_kobelyatsky_128.jpg",
            email: email,
            city: city,
            image: "http://placeimg.com/640/480"
        })
            .then(function (response) {
                getData()
                alert(response.status)
            })
            .catch(function (error) {
                alert(error);
            });
    }
}
