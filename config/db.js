const mongooes = require("mongoose");

exports.connectDB = (url) => {
  mongooes.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
};
