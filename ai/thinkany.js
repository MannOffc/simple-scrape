var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function thinkany(q) {
    var { data } = await axios.get(URL + "/ai/thinkany", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = thinkany