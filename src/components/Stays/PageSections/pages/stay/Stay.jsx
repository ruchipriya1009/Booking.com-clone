import React from "react";
import { Featured } from "../../Elements/featured/Featured";
import { FeaturedProperties } from "../../Elements/featuredProperties/FeaturedProperties";
import { Header } from "../../Elements/header/Header";
import { PropertyList } from "../../Elements/propertyList/PropertyList";
import './stay.css'
import SecondSection from "../../SecondSection";
import { MiddleSection } from "../../middleSection/MiddleSection";
import { NextTrip } from "../../NextTripDiv/NextTrip";
import { HomeGuestsDiv } from "../../HomeGuests/HomeGuestsDiv";
import Degination from "../../Degination";
function Home() {
  return (
    <div>
     
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
      </div>
        <SecondSection />
        <div>
            <MiddleSection />
            </div>
            <div>
            <NextTrip />
            </div>
            <div>
            <HomeGuestsDiv />
            </div>
            <div>
            <Degination />
            </div>
    </div>
  );
}

export default Home;