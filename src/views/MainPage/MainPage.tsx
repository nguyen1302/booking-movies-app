import React from 'react'
import { Calendar } from './components/Calendar'
import SliderComponent from './components/Slider/Slider';



export default function mainPage() {
  return (
    <div>
        <SliderComponent/>
        <Calendar/>
        <div className="Calendar__adds">Quảng cáo</div>
    </div>
  )
}
