var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function aoyo(q) {
    var { data } = await axios.get(URL + "/ai/aoyo", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = aoyo
