import React from "react";
import "./style.css";

const movie = {
  name: "1Inception",
  img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
  time: "120p",
  review: "hayyyyy",
};

export default function InforPage() {
  return (
    <div className="inforMovie">
      <div className="item">
        <img className="itemImg" src={movie.img} alt=""></img>
        <span className="itemName">{movie.name}</span>
        <span className="itemTime">{movie.time}</span>
        <p className="itemReview">{movie.review}</p>
      </div>
    </div>
  );
}
