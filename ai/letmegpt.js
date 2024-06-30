var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function letmegpt(q) {
    var { data } = await axios.get(URL + "/ai/letmegpt", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = letmegpt