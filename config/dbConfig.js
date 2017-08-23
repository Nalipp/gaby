var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/gaby';
} else {
  process.env.MONGODB_URI = 'mongodb://heroku_57q76p5t:stuoc3h34lt8lvh13i4s9mkra9@ds153113.mlab.com:53113/heroku_57q76p5t';
}

mongoose.connect(process.env.MONGODB_URI, err => {
  if (err) {
    console.log("# Failed to connect to MongoDB ");
  } else {
    console.log('# Connected to MongoDB')
  }
})

