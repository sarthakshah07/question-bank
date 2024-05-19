import React from 'react'
import "./_circularAnimations.css"
import {
    FcAutomatic,
    FcAddDatabase,
    FcBriefcase,
    FcCalendar,
    FcFinePrint,
    FcSalesPerformance
} from "react-icons/fc"


const CircularAnimation = () => {
    return (
        <div className='main-container'>
            <div className='inside-container'>
                <div className='inside-container2'>

                </div>
            </div>
            <div className='icon'>
                <div className='imgBx' id='icon1'>
                    <FcAddDatabase  />
                </div>
                <div className='imgBx' id='icon2' >
                    <FcAutomatic />
                </div>
                <div className='imgBx' id='icon3'>
                    <FcBriefcase />
                </div>
                <div className='imgBx' id='icon4'>
                    <FcCalendar />
                </div>
                <div className='imgBx' id='icon5'>
                    <FcFinePrint />
                </div>
                <div className='imgBx' id='icon6'>
                    <FcSalesPerformance />
                </div>
            </div>
        </div>
    )
}

export default CircularAnimation
