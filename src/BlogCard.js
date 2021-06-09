import React from 'react';

import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {

  // const updateCount = () => {
  //   setState((prevState, prevProps) => {
  //     return { likeCount: prevState.likeCount + 1 }
  //   });
  // }

  dumpLogs(props);

  return (
    <div className={classes.BlogCard} >
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>like count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
      <button onClick={props.onLike}>like</button>
    </div>
  );
}

export default BlogCard;