var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function kiryu(q) {
    var { data } = await axios.get(URL + "/internet/kiryu", {
        params: {
            query: q
        }
    })
    throw data.result
}

module.exports = kiryu
