import React from "react";
import "./ImgItem.css";
function ImgItem(props) {
  const { item, onImagesClick } = props;
  return (
    <div>
      <div className="tattoo-item">
        <img
          src={item.thumbnailUrl}
          onClick={() => {
            onImagesClick(item);
          }}
        />
        <h4>{item.title}</h4>
      </div>
    </div>
  );
}

export default ImgItem;
