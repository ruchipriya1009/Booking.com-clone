import { Route, Routes } from "react-router-dom";
import CarAvailable from "../components/CarRentalsPage/CarAvailable";
import CarPayment from "../components/CarRentalsPage/carPayment";
import CarRentals from "../components/CarRentalsPage/CarRentals";
import CarSearch from "../components/CarRentalsPage/CarSearch";
import AttractionIndex from '../components/Attractions/AttractionIndex'
import ListLanding from "../components/Attractions/pages_and_layouts/attractionPlaceListpage/ListLanding";

import ViewPlaceLanding from "../components/Attractions/pages_and_layouts/viewPlace/ViewPlaceLanding";
import Flights from "../FlightsPage/Flights";
import FlightsDetailsPage from "../FlightsPage/FlightsDetailsPage";
import Login from "../components/Login/Login";
import Home from "../components/Home";
import {SearchPage} from "../components/Stays/SearchPage/SearchPage";
import {HotelDetails} from "../components/Stays/HotelDetails/HotelDetails";
import VarifyUser from "../components/Attractions/pages_and_layouts/verifyUserDetails/VarifyUser";
import Checkout from "../components/Attractions/pages_and_layouts/checkout/CheckOut";


export default function AllRoutes(){
    return(
          <>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
 

            <Route exact path="/flights" element={<Flights/>}>

            </Route>
            <Route exact path="/flights/:id" element={<FlightsDetailsPage/>}>
              
            </Route>
            <Route exact path="/login" element={<Login />}>
              
            </Route>
            <Route exact path="/carrentals" element={<CarRentals/>}>
                
            </Route>
            <Route exact path="/car-available" element={<CarAvailable/>}>
                
            </Route>
            <Route exact path="/car-available/:id" element={<CarPayment/>}>

            </Route>
            <Route exact path="/carrentals/:id" element={<CarSearch/>}>
   
          </Route>
          <Route exact path="/attractions/:country" element={<ListLanding/>}>
             
            </Route>
            <Route exact path="/attractions/:country/:id" element={<ViewPlaceLanding/>}>

          </Route>
          <Route exact path="/attractions" element={<AttractionIndex/>}>

            </Route>
              <Route exact path="/search" element={<SearchPage/>}>
                  
              </Route>

              <Route path="/search/:id" element={<HotelDetails/>}>
                  
          </Route>
          <Route exact path="/varifyPurchase/:id" element={<VarifyUser/>}>
                  
          </Route>
          <Route exact path="/checkout/:id" element={<Checkout/>}>
           
          </Route>
          </Routes>
          </>
        
    )
}