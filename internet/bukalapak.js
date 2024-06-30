var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function bukalapak(q) {
    var { data } = await axios.get(URL + "/internet/bukalapak", {
        params: {
            query: q
        }
    })
    throw data.result
}

module.exports = bukalapak
