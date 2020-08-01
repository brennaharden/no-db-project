const express = require('express')
const ctrl = require('./controller.js')
const port = 4343

const app = express();

app.use(express.json())

app.get('/api/profiles', ctrl.getProfiles)
//param
app.post('/api/profile', ctrl.postProfile)
//body
app.put('/api/profile/edit/:id', ctrl.updateProfile)
//param
app.delete('/api/profile/delete/:id', ctrl.deleteProfile)
//param
app.get('/api/quote-by-id', ctrl.getQuote)
//query
app.get('/api/profile-by-id', ctrl.getProfile)
//query

app.listen(port, () => console.log(`Wheee, it's ${port}`))