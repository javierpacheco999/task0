const express =require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
 //res.send('hola mundo')
 res.render('index', {saludo2: 'Datos enviados dsde el render'})
})

app.listen(3000, () => { 
    console.log('Escuchando el puerto 3000')
})
