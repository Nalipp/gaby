const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/gaby_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Mongoose Warning', error);
    });
});

beforeEach((done) => {
  const { teachers } = mongoose.connection.collections;
  teachers.drop(() => done());
});
