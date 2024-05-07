const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req,res) =>{
    res.json('this is react native app')
})

app.listen(port, () =>{
    console.log('server is running')
})