const express = require('express');
const bodyParser =require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine','ejs');


app.use('/views',express.static('views'));

app.use(bodyParser.urlencoded({extended:true}));

let newItem = ""

app.get('/',(req,res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options)
    console.log(day);
    res.render("list", {KindOfDay: day,newListItems:newItem});
});

app.post('/',(req,res)=>{
    let newItem = req.body.newItem;
    res.redirect('/');
})

app.listen(3000, ()=>
console.group("I am Listening at Port 3000")

)