import React, { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import ImgItem from "./components/ImgItem";
import ImgPost from "./components/ImgPost";
import { v4 as uuidv4 } from "uuid";
import dataImages from "./data/dataImages";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedImage, setselectedImage] = useState(null);
  const [searchText, setSearchText] = useState("");
  function onImagesOpenClick(img) {
    setselectedImage(img);
  }
  function onImagesCloseClick() {
    setselectedImage(null);
  }

  const showImage = dataImages
    .filter((item) => item.title.includes(searchText))
    .map((item) => (
      <ImgItem item={item} key={uuidv4()} onImagesClick={onImagesOpenClick} />
    ));

  let imagePost = null;
  if (!!selectedImage) {
    imagePost = <ImgPost item={selectedImage} onBgClick={onImagesCloseClick} />;
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{showImage}</div>
          {imagePost}
        </div>
      </section>
    </div>
  );
}

export default App;
