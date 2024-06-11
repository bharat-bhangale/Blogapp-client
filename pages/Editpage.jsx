import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";

const Editpage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`https://blogapp-server-bfj0.onrender.com/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function updatepost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id",id);
    if (files?.[0]) {
      data.set("files", files?.[0]);
    }

    const response = await fetch("https://blogapp-server-bfj0.onrender.com/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if(response.ok)
    {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }
  return (
    <form onSubmit={updatepost}>
      <input
        type="title"
        placeholder="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder="summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />

      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: "5px" }}>Edit Post</button>z
    </form>
  );
};

export default Editpage;

