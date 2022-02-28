const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://wvwall:${password}@cluster0.ogj6q.mongodb.net/personsApp?retryWrites=true&w=majority`;
mongoose.connect(url);

const personsSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personsSchema);

const persons = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

persons.save().then((result) => {
  console.log(`added ${persons.name} to phonebook`);
  mongoose.connection.close();
});
