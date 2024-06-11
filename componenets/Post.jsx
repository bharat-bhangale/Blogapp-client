import React from 'react'
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

const Post = ({_id, title, summary, cover, createdAt, author}) => {
  const formattedDate = createdAt ? formatISO9075(new Date(createdAt)) : '';
  const authorUsername = author && author.username ? author.username : 'Unknown';
  const imageUrl = cover ? 'https://blogapp-server-bfj0.onrender.com/' + cover : 'https://blogapp-server-bfj0.onrender.com/default.jpg';

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={imageUrl} alt="Post cover" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{authorUsername}</a>
          <time>{formattedDate}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  )
}

export default Post

