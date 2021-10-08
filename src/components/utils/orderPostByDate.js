export const orderPostByDate = (posts) => {
  return posts.sort((a, b) => b.timestamp - a.timestamp);
};
