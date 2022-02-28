require("dotenv").config();
const { request, response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("build"));

const Person = require("./models/persons");

app.get("/", (request, response) => {
  response.send("<h1>Hello Walter!</h1>");
});

app.get("/info", (request, response) => {
  nPerson = Person.length;
  date = new Date();
  response.send(`<h2>Phonebook has ${nPerson} people</h2>
  <p>${date}</p`);
});

app.use(express.json()); //The json-parser functions so that it takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.

// get all resources

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});
//get one resource

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id)
    .then((persons) => {
      if (persons) {
        response.json(persons);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// delete one resource

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// add new resource

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "name missing" });
  }

  const persons = new Person({
    name: body.name,
    number: body.number,
  });

  persons.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

//update resource

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
