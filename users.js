const users = [

    {id: 1,
    name: 'foulen',
    age:18},

    {id: 2,
        name: 'moez',
        age:25},
        
    {id: 3,
        name: 'rayhana',
        age:30}
];

app.get('/users', (req, res) =>{
    res.send(users)
})
module.exports = users;