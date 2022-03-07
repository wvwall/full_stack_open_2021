const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let total = 0;
  total = blogs.reduce((sum, blog) => sum + blog.likes, total);
  return total;
};

const favoriteBlog = (blogs) => {
  const max = blogs.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  });
  return max.likes;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
