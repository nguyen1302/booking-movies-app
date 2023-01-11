import React from "react";
import "./style.css";

interface IMove {
  tenPhim: string;
  img: string;
  time: string;
  review?: string;
}

export default function ListMovies({ ...props }: IMove) {
  return (
    <div className="itemMovie">
      <img className="itemImg" src={props.img} alt=""></img>
      <span className="itemName">{props.tenPhim}</span>
      <span className="itemTime">{props.time}</span>
      <p className="itemReview">{props.review}</p>
    </div>
  );
}
