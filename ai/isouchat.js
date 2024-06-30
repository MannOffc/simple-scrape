var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function isouchat(q) {
    var { data } = await axios.get(URL + "/ai/isouchat", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = isouchat
