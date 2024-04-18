const axios = require("axios").default;

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";

const getComment = async (username) => {
  const { data: user } = await axios.get(`${USER_URL}?username=${username}`);

  const { data: posts } = await axios.get(`${POST_URL}?userId=${user[0].id}`);

  const { data: comments } = await axios.get(
    `${COMMENT_URL}?postId=${posts[0].id}`
  );

  console.log(comments);
};

getComment("Bret");
