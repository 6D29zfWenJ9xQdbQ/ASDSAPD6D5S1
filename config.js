const defaults = {
    username: "ServerList+"
}

module.exports = {
    // GOTN daily times in terms of seconds elapsed since midnight (UTC)
    americaTime: 7200,
    asiaTime: 43200,
    europeTime: 63300,
    // Webhooks to post GOTN link to for certain regions
    subscribers: {
        america: [
            {
                username: defaults.username,
                avatar: "https://cdn.discordapp.com/icons/967842116761972737/cef00214467d64efe99983106a3bf500.png?size=1024",
                messageContent: "GOTN is active now!",
                webhook: "https://discord.com/api/webhooks/1277308759022239746/SQ9zK167ZFyLHR_ulVle-_boWWlxsenMTeLr0ncxgNm0TVA2n_B5ik0o7MjQP_Bu548u"
            }
        ],
        europe: [
            {
                username: defaults.username,
                avatar: "https://cdn.discordapp.com/icons/857391477989441536/77261eee58b6bcb18378e71cd56a4c15.png?size=1024",
                messageContent: "GOTN is active now!",
                webhook: "https://discord.com/api/webhooks/1277308759022239746/SQ9zK167ZFyLHR_ulVle-_boWWlxsenMTeLr0ncxgNm0TVA2n_B5ik0o7MjQP_Bu548u"
            }
        ],
        asia: [
            {
                username: defaults.username,
                avatar: "https://cdn.discordapp.com/icons/1138794381596446770/671b773b1b638035738c26f9a391a7a1.png?size=1024",
                messageContent: "GOTN is active now!",
                webhook: "https://discord.com/api/webhooks/1277308759022239746/SQ9zK167ZFyLHR_ulVle-_boWWlxsenMTeLr0ncxgNm0TVA2n_B5ik0o7MjQP_Bu548u"
            }
        ]
    },
    // Ignore certain GOTN numbers
    ignored: {
        america: [1],
        europe: [1, 100],
        asia: [1]
    },
    // rate at which to query simstatus.json endpoint
    pollingRate: 15000
}
