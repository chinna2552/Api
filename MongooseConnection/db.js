const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/Test';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
db.once('open', () => {
  
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
