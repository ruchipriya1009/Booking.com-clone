import React from 'react'
import './featured.css'

export const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/15649559.jpg?k=99f77d3b11f10524de7a8edc08eeaf790460013b1e453b61ead7c78680f9eaec&o=&hp=1" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/102283740.jpg?k=38ae0a303239e5af333a22a27b98961b512a8d4a08a9af18697238a5add7ba74&o=&hp=1" alt="" />
            <div className="featuredTitles">
                <h1>Colombo</h1>
                <h2>532 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/141949318.jpg?k=7bbf1877158c4453de1df9792a0ee035615fa4130d07544e430ce91ba317ef21&o=&hp=1" alt="" />
            <div className="featuredTitles">
                <h1>Sydney</h1>
                <h2>454 properties</h2>
            </div>
        </div>
    </div>
  )
}
