const express = require('express');
const app = express();
const PORT = 4000;
const pokemon = require('./pokemon');
const methodOv = require('method-override')
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs')
app.use(methodOv('_method'));


//this the route to the index.ejs file
app.get('/pokemon', (req, res) => {
    res.render('index', {pokemon});
})

app.get('/pokemon/:id', (req, res) => {
    let singlePokemon = pokemon[req.params.id];
    res.render('show', {singlePokemon});
})

app.get('/*', (req, res) => {
    res.send(`<h1> bad link, dumbass </h1>`)
})

app.listen(PORT, () => {
    console.log(`🐛🐛 Server be on PORT ${PORT} 🐛🐛`)
})