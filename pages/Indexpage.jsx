// import React, { useEffect,useState } from "react";
// import Post from "../componenets/Post";

// const Indexpage = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch("https://blogapp-server-bfj0.onrender.com/post").then((response) => {
//       response.json().then((posts) => {
//        setPosts(posts);
//       });
//     });
//   }, []);
//   return (
//     <>
//       {posts.length > 0 && posts.map(post => (
//         <Post key={post._id} {...post} />
//       ))}
//     </>
//   );
// };

// export default Indexpage;
import React, { useEffect, useState } from "react";
import Post from "../componenets/Post";

const Indexpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://blogapp-server-bfj0.onrender.com/post")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.error(`Fetch error: ${error}`);
      });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
};

export default Indexpage;