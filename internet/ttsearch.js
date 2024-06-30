var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function ttsearch(q) {
    var { data } = await axios.get(URL + "/internet/ttseach", {
        params: {
            query: q
        }
    })
    throw data.result
}

module.exports = ttsearch
