const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(done => {
   mongoose.connect('mongodb://localhost/books_test', {
      useMongoClient: true
   });

   mongoose.connection
      .once('open', () => {
         console.log('Connexion est établie');
         done();
      })
      .on('error', error => console.warn('Erreur durant la connexion', error));
});

beforeEach('Suprrime les anciens livres', done => {
   const { books } = mongoose.connection.collections;
   books.drop(() => done());
});
