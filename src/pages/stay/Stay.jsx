import React from "react";
import { Featured } from "../../Elements/featured/Featured";
import { FeaturedProperties } from "../../Elements/featuredProperties/FeaturedProperties";
import Footer from "../../Elements/footer/Footer";
import { Header } from "../../components/Stays/Elements/header";
import MailList from "../../Elements/mailList/MailList";
import { Navbar } from "../../Elements/navbar/Navbar";
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
        <MailList/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home;