const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/blogs");

const api = supertest(app);

const initialBlogs = [
  {
    title: "test_1",
    author: "wvwall",
    url: "www.google.it",
    likes: 10,
  },
  {
    title: "test_2",
    author: "wvwall",
    url: "www.google.it",
    likes: 14,
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(initialBlogs[1]);
  await blogObject.save();
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 10000);

test("all blog are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(initialBlogs.length);
});

test("a specific blog is within the returned blog", async () => {
  const response = await api.get("/api/blogs");

  const titles = response.body.map((r) => r.title);
  expect(titles).toContain("test_1");
});

test("there are two blogs", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(2);
});

test("the first blog is about test", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body[0].title).toBe("test_1");
});

afterAll(() => {
  mongoose.connection.close();
});
