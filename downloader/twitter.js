var axios = require('axios')

var URL = "https://api-manaxu.vercel.app/api"

async function twitter(q) {
    var { data } = await axios.get(URL + "/downloader/twitter", {
        params: {
            url: q
        }
    })
    throw data.result[0].url
}

module.exports = twitter
