const assert = require('assert'); //tests de comparaison
const Book = require('../src/books');

describe('Test de read', () => {
   let book1;
   beforeEach(done => {
      book1 = new Book({ title: 'Harry Potter' });
      book1.save().then(() => done());
   });

   it('Recherche de livre par son titre', done => {
      Book.find({ title: 'Harry Potter' }).then(books => {
         assert(books[0]._id.equals(book1._id));
         done();
      });
   });

   it('Recherche de livre par son id', done => {
      Book.findOne({ _id: book1._id }).then(book => {
         assert(book.title === book1.title);
         done();
      });
   });
   // it('Recherche de livre par son id', done => {});
});
