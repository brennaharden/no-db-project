const profiles = require('./profiles.json')
let id = 8

module.exports = {
    getProfiles: (req, res) => {
        res.status(200).send(profiles)
    },
    postProfile: (req, res) => {
        const {name, hometown, faculty, img, quote} = req.body;
        let newProfile = {
            id,
            name,
            hometown,
            faculty,
            img,
            quote
        }
        profiles.push(newProfile)
        id++
        res.status(200).send(profiles)
    },
    updateProfile: (req, res) => {
        const {name, hometown, faculty, img, quote} = req.body
        const index = profiles.findIndex(profile => profile.id === +req.params.id)
        if (index === -1) {
            res.sendStatus(404)
        } else {
            profiles[index].name = name
            profiles[index].hometown = hometown
            profiles[index].faculty = faculty
            profiles[index].img = img
            profiles[index].quote = quote
            res.status(200).send(profiles)
        }
    },
    deleteProfile: (req, res) => {
        const index = profiles.findIndex(profile => profile.id === +req.params.id)
        if (index === -1) {
            res.status(500).send('ID not found... whoops!')
        } else {
            profiles.splice(index, 1)
            res.status(200).send(profiles)
        }
    },
    getQuote: (req, res) => {
        const byId = profiles.filter( profile => profile.id === +req.query.id)
        if (!byId.length) {
            res.sendStatus(404)
        } else {
            res.status(200).send(byId[0].quote)
        }
    },
    getProfile: (req, res) => {
        const byId = profiles.filter(profile => profile.id === +req.query.id)
        if (!byId.length) {
            res.sendStatus(404)
        } else {
            res.status(200).send(byId)
        }
    }
}