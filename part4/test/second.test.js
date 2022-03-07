const listHelper = require("../utils/list_helper");

describe("total likes", () => {
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

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(12);
  });
});
