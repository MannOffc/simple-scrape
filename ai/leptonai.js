var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function leptonai(q) {
    var { data } = await axios.get(URL + "/ai/leptonai", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = leptonai
