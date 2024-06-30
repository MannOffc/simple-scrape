var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function yousearch(q) {
    var { data } = await axios.get(URL + "/ai/yousearch", {
        params: {
            prompt: `${encodeURIComponent(q)}`
        }
    })
    throw data.result
}

module.exports = yousearch
