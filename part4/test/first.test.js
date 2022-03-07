const listHelper = require("../utils/list_helper");

test("dummy return one", () => {
  const blogs = [
    {
      title: "test_1",
      author: "wvwall",
      url: "www.google.it",
      likes: 4,
    },
    {
      title: "test_2",
      author: "wvwall",
      url: "www.google.it",
      likes: 4,
    },
    {
      title: "test_3",
      author: "wvwall",
      url: "www.google.it",
      likes: 4,
    },
  ];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});
