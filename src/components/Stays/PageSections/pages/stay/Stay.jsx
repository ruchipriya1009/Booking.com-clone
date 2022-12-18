import React from "react";
import { Featured } from "../../Elements/featured/Featured";
import { FeaturedProperties } from "../../Elements/featuredProperties/FeaturedProperties";
import Footer from "../../Elements/footer/Footer";
import { Header } from "../../Elements/header/Header";

import { PropertyList } from "../../Elements/propertyList/PropertyList";
import './stay.css'

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
      
    </div>
  );
}

export default Home;