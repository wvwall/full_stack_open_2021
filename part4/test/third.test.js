const listHelper = require("../utils/list_helper");

describe("more likes", () => {
  const blogs = [
    {
      title: "test_1",
      author: "wvwall",
      url: "www.google.it",
      likes: 14,
    },
    {
      title: "test_2",
      author: "wvwall",
      url: "www.google.it",
      likes: 34,
    },
    {
      title: "test_3",
      author: "wvwall",
      url: "www.google.it",
      likes: 4,
    },
  ];
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.favoriteBlog(blogs);
    expect(result).toEqual(34);
  });
});
