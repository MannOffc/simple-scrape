var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function tiktok(q) {
    var { data } = await axios.get(URL + "/downloader/tiktok", {
        params: {
            url: q
        }
    })
    throw data.result
}

module.exports = tiktok
