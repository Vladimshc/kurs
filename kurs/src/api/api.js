import axios from "axios/index";

function get(url) {
    return new Promise((resolve, reject) => {
        axios.get(`${url}`)
            .then(response => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}