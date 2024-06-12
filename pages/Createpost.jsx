// import React, { useState } from "react";
// import {Navigate} from "react-router-dom";
// import Editor from "./Editor";


// const Createpost = () => {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState("");
//   const [redirect, setRedirect] = useState(false)

//   const data = new FormData();
//   data.set("title", title);
//   data.set("summary", summary);
//   data.set("content", content);
//   data.set("files", files[0]);
//  async function createNewPost(ev) {
//     ev.preventDefault();

//     console.log(files);
//     const response = await fetch("https://blogapp-server-bfj0.onrender.com/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });
//     if(response.ok)
//     {
//       setRedirect(true);
//     }
//   }

//   if(redirect)
//   {
//     return <Navigate to={"/"} />
//   }
//   return (
//     <form onSubmit={createNewPost}>
//       <div className="mb-3 ">
//       <label htmlFor="title">Title:</label>
//       <input
//         type="title"
//         placeholder="title"
//         value={title}
//         required
//         onChange={(ev) => setTitle(ev.target.value)
//           }
//       />
//       </div>
//       <div className="mb-3 ">
//       <label htmlFor="summary">Summary:</label>
//       <input
//         type="summary"
//         placeholder="summary"
//         value={summary}
//         required
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       </div>
//       <div className="mb-3 ">
//       <input type="file" onChange={(ev) => setFiles(ev.target.files)} required />
//       </div>
//       <div className="mb-3 ">
//       <label htmlFor="content">Content</label>
//       <Editor value={content} onChange={setContent} required/>
//       </div>
//       <button style={{ marginTop: "5px" }}>Create Post</button>
//     </form>
//   );
// };

// export default Createpost;
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null); // Initialize as null for a file input
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("content", content);
    if (files) data.append("files", files[0]); // Check if files exist and append the first file

    const response = await fetch("https://blogapp-server-bfj0.onrender.com/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={createNewPost}>
      <div className="mb-3">
        <label htmlFor="title">Title:</label>
        <input
          type="text" // Corrected type from "title" to "text"
          placeholder="title"
          value={title}
          required
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="summary">Summary:</label>
        <input
          type="text" // Corrected type from "summary" to "text"
          placeholder="summary"
          value={summary}
          required
          onChange={(ev) => setSummary(ev.target.value)}
        />
      </div>
      <div className="mb-3">
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="content">Content</label>
        <textarea // Replaced Editor component with textarea for simplicity
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          required
        />
      </div>
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePost;
