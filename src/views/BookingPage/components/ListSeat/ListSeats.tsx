import React from 'react'
import "./style.css"

interface ISeat {
    onclick: Function;
    seat: string,
    type: string,
    price: number,
    status: number,
}

export default function ListSeats({...props}: ISeat) {
  return (
    <div className={`seat ${props.type}`}>
        <p className='seat_id'>{props.seat}</p>
        <p className='seat_type'>{props.type}</p>
        <p className='seat_price'>{props.price}</p>
    </div>
  )
}
