const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);
  //   const result = data.slice(0, 10).map((item) => {
  //     return {
  //       userId: item.userId,
  //       id: item.id,
  //       title: item.title,
  //     };
  //   });
  //   return result;

  const result = data.slice(0, 10).reduce((acc, curr) => {
    acc[curr.id] = {
      ...curr,
    };
    delete acc[curr.id].body;

    return acc;
  }, {});

  return result;
}

getData()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
