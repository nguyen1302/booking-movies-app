import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovie } from '../../store/listMovies/shared/selectors'
import ListSeats from './components/ListSeat/ListSeats'
import "./style.css"


export default function BookingPage() {

    let arrListSeats = [
        {
            id: 'A1',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'A2',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'A3',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'A4',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'B1',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'B2',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'B3',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'B4',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'C1',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'C2',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'C3',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'C4',
            type: 'standard',
            Price: 95000,
            status: 1,
        },
        {
            id: 'D1',
            type: 'vip',
            Price: 125000,
            status: 1,
        },
        {
            id: 'D2',
            type: 'vip',
            Price: 125000,
            status: 1,
        },
        {
            id: 'D3',
            type: 'vip',
            Price: 125000,
            status: 1,
        },
        {
            id: 'D4',
            type: 'vip',
            Price: 125000,
            status: 1,
        },
    ]

    const data = useSelector(selectMovie)
    console.log(data, 'inforPage')
  
    const pathName = window.location.pathname
    const path = Number(pathName.slice(1, 6))
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
    };

    function onclick() {
        
    }
    

  return (
    <div className='booking'>
        <div className='booking_screen'>
            SCREEN
        </div>
        <div className='booking_seat'>
            {arrListSeats.map((index) => (
                <ListSeats
                onclick={onclick}
                seat={index.id}
                type={index.type}
                price={index.Price}
                status={index.status}
                />
            ))}
        </div>
        <div className='formSelectSeat'>
            <div className='formSelectSeat_infor'>
                Thông tin
                <div className="formSelectSeat_infor_item">
                    <img className="formSelectSeat_infor_itemImg" src={movie.img} alt=""></img>
                    <div className='formSelectSeat_infor-about'>
                        < span className="formSelectSeat_infor_itemName">{movie.name}</span>
                        <span className="formSelectSeat_infor_itemTime">{movie.time}</span>
                    </div>
                </div>
            </div>
            <div className='formSelectSeat_seat'>
                Ghế đã chọn
                <div>

                </div>
            </div>
            <div className='formSelectSeat_price'>
                <div className='formSelectSeat_price_show'>Giá</div>
                <a href="/" className='formSelectSeat_price_pay'>Thanh toán</a>
            </div>
        </div>
    </div>
  )
}
