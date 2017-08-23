var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
  url = 'mongodb://localhost:27017/gaby';
} else {
  // url = 'mongodb://heroku_m7jkxr6b:3371vuqjk1vvb7tg7usjd715j0@ds151993.mlab.com:51993/heroku_m7jkxr6b';
  url = 'mongodb://localhost:27017/gabyProduction';
}

mongoose.connect(url, err => {
  if (err) {
    console.log("# Failed to connect to MongoDB ");
  } else {
    console.log('# Connected to MongoDB')
  }
})

