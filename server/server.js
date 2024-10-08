const express = require('express');
const app = express();
const port = 3000;
const cors=require("cors");

const budget = require('./budget-data.json');
app.use(cors());
// app.use('/', express.static('public'));
//const budget= {
//    myBudget: [
//    {
//        title: 'Eat out',
//        budget: 25
//    },
//    {
//        title: 'Rent',
//        budget: 375
//    },
//    {
//        title: 'Grocery',
//        budget: 110
//    },
// ]
//};
// app.use("/",express.static('public'))
//app.get('/hello', (req,res) => {
//    res.send('hello world!');
//});

app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});