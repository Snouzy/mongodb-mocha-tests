const assert = require('assert'); //tests de comparaison
const Book = require('../src/books');

describe('Test de create', () => {
   it('Sauvegarde un livre', done => {
      const book1 = new Book({ title: 'Harry Potter' });
      book1.save().then(() => {
         assert(!book1.isNew); //est dans la base de donnée
         done();
      });
   });
});
