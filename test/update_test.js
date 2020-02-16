const assert = require('assert'); //tests de comparaison
const Book = require('../src/books');

describe('Test de update', () => {
   let book1;
   const newTitle = 'Game of Thrones';
   beforeEach(done => {
      book1 = new Book({ title: 'Moby Dick' });
      book1.save().then(() => done());
   });

   function assertTitle(promise, done) {
      promise.then(() => {
         Book.find({}).then(books => {
            assert(books[0].title === newTitle);
            done();
         });
      });
   }

   it('Update depuis une instance', done => {
      book1.set('title', newTitle);
      assertTitle(book1.save(), done);
   });

   it('Update depuis le modèle', done => {
      assertTitle(
         Book.updateOne({ title: 'Moby Dick' }, { title: newTitle }),
         done
      );
   });

   it('Recherche un livre par son titre et update (findOneAndUpdate)', done => {
      assertTitle(
         Book.findOneAndUpdate({ title: 'Moby Dick' }, { title: newTitle })
      );
      done();
   });

   it('Recherche un livre par son id et update (findByIdAndUpdate)', done => {
      assertTitle(Book.findByIdAndUpdate(book1._id, { title: newTitle }));
      done();
   });
});
