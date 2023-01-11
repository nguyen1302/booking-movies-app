import React, { useEffect } from "react";
import Slider from "react-slick";
import "./style.css";
import ListMovies from "../ListMovies/ListMovies";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";

// Data movies
const ListMovie = [
  {
    Name: "1Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "1Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "1Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "2Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "3Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "4Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "5Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "6Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "7Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "8Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "1Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "2Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "3Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "4Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "5Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "6Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "7Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "8Inception",
    Img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
];

console.log(ListMovie.length);

const ListMovieWill = [
  {
    Name: "1Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "2Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "3Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "4Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "5Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "6Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "7Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "8Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "1Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "2Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "3Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "4Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "5Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "6Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "7Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
  {
    Name: "8Interstellar",
    Img: "https://i.pinimg.com/564x/46/3f/29/463f2971f4769917cef63bc58365f788.jpg",
    Time: "120p",
    Review: "hayyyyy",
  },
];

interface IDataMovie {
  biDanh: string;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  maPhim: number;
  moTa: string;
  ngayKhoiChieu: string;
  tenPhim: string;
  trailer: string;
}

interface ICha {
  [key: string]: IDataMovie[];
}

// Splice List moview to 2D array

export default function Calendar() {
  const [isShowNow, setisShowNow] = useState(true);
  const [isShowWill, setisShowWill] = useState(false);
  const [arrData, setArrData] = useState<ICha[]>([]);
  const [arr, setArr] = useState<any[]>([]);

  // Call API
  useEffect(() => {
    fetch(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Lỗi, mã lỗi " + response.status);
          return;
        }
        // parse response data
        response.json().then((data) => {
          //console.log(data);
          setArr(data);
          setArrData(spliceIntoChunks(data, 8));
          console.log(arr, "arr");
        });
      })
      .catch((err) => {
        console.log("Error :-S", err);
      });
    console.count("a");
  }, []);
  console.log(arrData, "arrData");
  //console.log(arrData, "abc");
  // splice Data
  //   function dataShow(arr: any, chunkSize: number) {
  //     const arrData = [];
  //     let res = [];
  //     const resutl = Math.floor(arr.length / chunkSize);
  //     console.log(resutl);
  //     for (let i = 0; i <= arr.length; i++) {
  //       if (res.length === chunkSize || i === arr.length) {
  //         console.log(i);
  //         arrData.push(res);
  //         res = [];
  //         res.push(arr[i]);
  //       } else if (arrData.length === resutl) {
  //         res.push(arr[i]);
  //       } else {
  //         res.push(arr[i]);
  //       }
  //     }
  //     return arrData;
  //   }

  function spliceIntoChunks(arr: any, chunkSize: number) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
    return res;
  }

  //setArr(spliceIntoChunks(arrData, 8));
  //console.log(arr);
  //let arrWill = spliceIntoChunks(arrData, 8);
  //console.log(arr);

  //Slider setting
  var settings = {
    dots: false,
    infinite: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function showClendarNow() {
    setisShowNow(true);
    setisShowWill(false);
  }
  function showClendarWill() {
    setisShowNow(false);
    setisShowWill(true);
  }

  return (
    <div className="Calendar">
      <header className="Calendar__header">
        <div onClick={showClendarNow} className="Calendar__header-now">
          Đang chiếu
        </div>
        <div onClick={showClendarWill} className="Calendar__header-will">
          Sắp chiếu
        </div>
      </header>
      <div className="Calendar__listMovies">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {isShowNow &&
            arrData.map((i: any) => (
              <SwiperSlide className="SwiperSlide">
                {i.map((item: IDataMovie) => (
                  <ListMovies
                    //onClick={onclick}
                    tenPhim={item.tenPhim}
                    img={item.hinhAnh}
                    time={item.ngayKhoiChieu}
                    // review={item.moTa}
                  />
                ))}
              </SwiperSlide>
            ))}
          {/* {isShowWill &&
                arrWill.map((i) => (
                <SwiperSlide className="SwiperSlide">
                    {i.map((item: any) => (
                    <ListMovies
                        name={item.Name}
                        img={item.Img}
                        time={item.Time}
                        review={item.Review}
                    />
                    ))}
                </SwiperSlide>
                ))} */}
        </Swiper>
      </div>

      <div className="Calendar__adds">Quảng cáo</div>
    </div>
  );
}