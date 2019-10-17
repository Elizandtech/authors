const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const {Http} = require('@status/codes');

module.exports = {
    index: (_req,res) => {
        console.log('IN GET /authors');
        Author.find().sort({name: 'asc'})
        .then(allauthors => {console.log('all authors: ', allauthors); res.json(allauthors);})
        .catch(err => res.json(err));
    },
    create: (req,res) => {
        console.log('IN POST /authors');
        const author = new Author(req.body);
        author.save()
        .then(newauthor => {console.log('new author info: ', newauthor); res.json(newauthor);})
        .catch(error => {
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            res.status(Http.Unauthorized).json(errors);}
        );
    },
    show: (req, res) => {
        console.log('GET /authors/:id');
        const {id} = req.params;
        console.log('id passed:', id);
        Author.findById(id)
        .then(item => {console.log('found item: ', item); res.json(item)})
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        console.log('PUT /authors/:id');
        const {id} = req.params;
        console.log ('id requested: ', id);
        Author.findByIdAndUpdate(id, req.body, {new: true, runValidators:true})     //findByIdAndUpdate bypasses validators need to add runValidators. add query to catch unique validator error. 
        .then(updateditem => {console.log('updated author: ', updateditem); res.json({message: updateditem.name + " successfully updated.", author: updateditem});})
        .catch(error => {
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            res.status(Http.Unauthorized).json(errors);}
        );
    },
    destroy: (req,res) => {
        console.log('DELETE');
        const {id} = req.params;
        console.log('id: ', id);
        Author.findByIdAndDelete(id)
        .then(deleteditem => {console.log('deleted: '+ deleteditem.name); res.json(deleteditem.name+' has been deleted');})
        .catch(err => res.json(err));
    }
}