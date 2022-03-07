require("dotenv").config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const MONGODB_URI =
  process.env === "test" ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
};
