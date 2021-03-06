import port from "./config";

export function insertAuthor(author){
    return fetch(`http://localhost:${port}/authors`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(author)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function getAuthorByUsernameOrEmail(username, password) {
    return fetch(`http://localhost:${port}/authors?username=${username}&password=${password}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function getAuthorByUsername(username) {
    return fetch(`http://localhost:${port}/authors?username=${username}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function getAuthorByEmail(email) {
    return fetch(`http://localhost:${port}/authors?email=${email}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

