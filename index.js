const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Second Time Server Setup Practice');
})
const users = [
    {id: 1, name: "Korim", email: "korim@gmail.com", phone: "0171717171"},
    {id: 2, name: "Jorim", email: "jorim@gmail.com", phone: "0171717171"},
    {id: 3, name: "Borim", email: "borim@gmail.com", phone: "0171717171"},
    {id: 4, name: "Lorim", email: "lorim@gmail.com", phone: "0171717171"},
    {id: 5, name: "Morim", email: "morim@gmail.com", phone: "0171717171"},
    {id: 6, name: "Korim", email: "korim@gmail.com", phone: "0171717171"},
    {id: 7, name: "Korim", email: "korim@gmail.com", phone: "0171717171"}
]
app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(matched)
    }else{
        res.send(users)
    }
});

// Dynamic Parameter
app.get('/user/:id', (req, res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    // const user = users[id]   // user with index
    const user = users.find(u=> u.id === id); // user with id
    res.send(user);
})

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


app.listen(port, ()=>{
    console.log('Listening to the port', port);
})