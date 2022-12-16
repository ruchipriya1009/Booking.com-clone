import React from "react";
import "./featuredProperties.css";

export const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=&hp=1"
          alt=""
        />
        <span className="fpName">Sugar Loft Apartments</span>
        <span className="fpCity">Rio de Janeiro</span>
        <span className="fpPrice">Starting from LKR 17,131</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=&hp=1"
          alt=""
        />
        <span className="fpName">The Patio Barcelona</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from LKR 149,911</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o=&hp=1"
          alt=""
        />
        <span className="fpName">Unique Design Apartments</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from LKR 101,471</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=&hp=1"
          alt=""
        />
        <span className="fpName">Appartamento Benincampi</span>
        <span className="fpCity">Rome</span>
        <span className="fpPrice">Starting from LKR 108,685</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};
