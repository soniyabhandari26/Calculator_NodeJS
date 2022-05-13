// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', function (req, res){
//   res.send('Hello World!')
// })

//   app.listen(port, function (){
//   //console.log(`Example app listening on port ${port}`)
// })


const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(__dirname + "/index.html");
})

app.get('/Add', (req, res) => {
    const firstNumber = parseFloat(req.body.firstNumber);
    const secondNumber = parseFloat(req.body.secondNumber);
    const Add = firstNumber + secondNumber;
    // const calc = Add.toFixed(2);

    res.send("Result: "+ Add)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.post('/Sub', (req, res) => {
//   const firstNumber = parseFloat(req.body.firstNum);
//   const secondNumber = parseFloat(req.body.secondNum);
//   const Sub = firstNumber - secondNumber;
//   // const calc = Add.toFixed(2);

//   res.send("Result: "+ Sub)
// })