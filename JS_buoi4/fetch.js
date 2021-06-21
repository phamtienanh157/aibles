
// // example
// fetch("examples/example.json")
//   .then(function (response) {
//     // Do stuff with the response
//   })
//   .catch(function (error) {
//     console.log("Looks like there was a problem: \n", error);
//   })

// response.ok, response.status, response.statusText đánh giá trang thái response


// fetch("examples/example.json")
//     .then(function (response) {
//         // res.status >= 200 && res.status < 300
//         if (!response.ok) {
//             throw Error(response.statusText)
//         }
//         // Do stuff with the response
//     })
//     .catch(function (error) {
//         console.log("Looks like there was a problem: \n", error)
//     })

// async function getUser() {
//     try {
//         const response = await fetch('https://60becf8e6035840017c17a48.mockapi.io/api/users');
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUser()
// fetch("https://60becf8e6035840017c17a48.mockapi.io/api/users")
//     .then(function (response) {
//         if (!response.ok) {
//             throw Error(response.statusText)
//         }
//         // Read the response as json.
//         return response.json()
//     })
//     .then(function (responseAsJson) {
//         // Do stuff with the JSON
//         console.log(responseAsJson)
//     })
//     .catch(function (error) {
//         console.log("Looks like there was a problem: \n", error)
//     })

// form
// fetch(pathToResource)
//     .then(validateResponse)
//     .then(readResponseAsJSON)
//     .then(logResult)
//     .catch(logError);