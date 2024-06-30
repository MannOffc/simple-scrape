//ai
var aoyo = require('./ai/aoyo'), isouchat = require('./ai/isouchat'), leptonai = require('./ai/leptonai'), letmegpt = require('./ai/letmegpt'), thinkany = require('./ai/thinkany'), yousearch = require('./ai/yousearch')

//downloader
var tiktok = require('./downloader/tiktok'), twitter = require('./downloader/twitter')

//internet
var bukalapak = require('./internet/bukalapak'), kiryu = require('./internet/kiryu'), ttsearch = require('./internet/ttsearch')

//tools
var scanner = require('./tools/scanner')

module.exports = {
ai: {
    aoyo: aoyo,
    isouchat: isouchat,
    leptonai: leptonai,
    letmegpt: letmegpt,
    thinkany: thinkany,
    yousearch: yousearch
},
downloader: {
    tiktok: tiktok,
    twietter: twitter
},
internet: {
    bukalapak: bukalapak,
    kiryu: kiryu,
    ttsearch: ttsearch
},
tools: {
    scanner: scanner
}
}
