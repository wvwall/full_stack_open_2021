const mongoose = require("mongoose");
const config = require("./utils/config");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

mongoose.connect(config.MONGODB_URI);

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const blogs = new Blog({
  title: "test_3",
  author: "wvwall",
  url: "www.google.it",
  likes: 4,
});

blogs.save().then((result) => {
  console.log(`added article of ${blogs.author} `);
  mongoose.connection.close();
});
