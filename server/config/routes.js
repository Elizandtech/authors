const author = require('../controllers/authors')

module.exports = function(app) {
app.get('/authors', (req,res) => {
   author.index(req,res);
})
app.post('/authors', (req, res)=>{       // create a task
    author.create(req, res);
})
app.get('/authors/:id', (req, res)=>{     // get a task by id
    author.show(req, res);
})
app.put('/authors/:id', (req, res)=> {       // update a task
    author.update(req, res);
})
app.delete('/authors/:id', (req, res)=>{      // delete a task
    author.destroy(req, res);
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}