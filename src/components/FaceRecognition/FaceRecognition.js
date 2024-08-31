import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, arrayOfBoundingBoxes, onLinkClick }) => {
  function hideImg() {
    document.getElementById("inputImage").style.display = "none";
    document.getElementsByClassName("wrapper")[0].firstChild.innerHTML =
      'Enter Valid URL <br> OR <br> <a href="https://thispersondoesnotexist.com/" class="link">Try with this randomly generated face</a>';
    document.querySelector(".link").addEventListener("click", onLinkClick);
  }

  function showImg() {
    document.getElementById("inputImage").style.display = "block";
    document.getElementsByClassName("failed")[0].innerHTML = "";
  }

  return (
    <div className="imageBox">
      <div className="wrapper">
        <p className="failed"></p>
        <img
          id="inputImage"
          alt="inputImage"
          src={imageURL}
          onError={hideImg}
          onLoad={showImg}
        ></img>
        {arrayOfBoundingBoxes.map((box, i) => {
          const { top_row, left_col, bottom_row, right_col } = box;
          return (
            <div
              className="face-border"
              key={i}
              style={{
                top: top_row,
                left: left_col,
                bottom: bottom_row,
                right: right_col,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
