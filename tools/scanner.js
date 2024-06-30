var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function scanner(q) {
    var { data } = await axios.get(URL + "/tools/scanner", {
        params: {
            url: q
        }
    })
    throw data.result
}

module.exports = scanner
