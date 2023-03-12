import React from "react";
import "./ImgPost.css";
function ImgPost(props) {
  const { item, onBgClick } = props;
  return (
    <div className="image-post">
      <div className="image-post-bg" onClick={onBgClick} />
      <div className="image-post-content">
        <img src={item.thumbnailUrl} alt="" />
        <h4>{item.title}</h4>
      </div>
    </div>
  );
}

export default ImgPost;
