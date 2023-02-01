import React from "react";
import { ListMovies } from "../MainPage/components/ListMovies";
import "./style.css";
import { selectMovie } from '../../store/listMovies/shared/selectors';
import { useSelector } from 'react-redux';
import { info } from "console";
import { Link } from 'react-router-dom';



export default function InforPage(
) {
  const data = useSelector(selectMovie)
  console.log(data, 'inforPage')

  const pathName = window.location.pathname
  const path = Number(pathName.slice(7))
  console.log(path, 'path')

  function getInfor() {
    for(let i = 0; i < data.length; i++)
    {
      if(data[i].maPhim === path)
      {
        console.log(data[i])
        return data[i];
      }
      else {
        console.log('fail')
      }
    }
  }
  const infor = getInfor()

  const movie = {
    name: infor.tenPhim,
    img: infor.hinhAnh,
    time: infor.ngayKhoiChieu,
    review: infor.moTa,
  };
  

  return (
    <div className="inforMovie">
      <div className="item">
        <img className="itemImg" src={movie.img} alt=""></img>
        <span className="itemName">{movie.name}</span>
        <span className="itemTime">{movie.time}</span>
        <p className="itemReview">{movie.review}</p>
        <Link to={'/' + path + "/booking"}>
        <p className="buyTicket">Mua vé</p>
        </Link>
      </div>
      
    </div>
  );
}
