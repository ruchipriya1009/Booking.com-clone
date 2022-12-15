 import { Route, Routes} from "react-router-dom";
 import AttractionIndex from '../Attractions/AttractionIndex'
 import ListLanding from "../Attractions/pages_and_layouts/attractionPlaceListpage/ListLanding";

 import ViewPlaceLanding from "../Attractions/pages_and_layouts/viewPlace/ViewPlaceLanding";
 import VarifyUser from "../Attractions/pages_and_layouts/verifyUserDetails/VerifyUser";
 import Checkout from "../Attractions/pages_and_layouts/checkout/CheckOut";


export default function AllRoutes(){
    return(
        <>
       <Routes>
          
          <Route exact path="/attractions/:country">
             <ListLanding/>
            </Route>
            <Route exact path="/attractions/:country/:id">
             <ViewPlaceLanding/>
          </Route>
          <Route exact path="/attractions">
             <AttractionIndex/>
            </Route>
              <Route exact path="/search">
                  {/* <SearchPage/> */}
              </Route>

          <Route exact path="/varifyPurchase/:id">
                  <VarifyUser/>
          </Route>
          <Route exact path="/checkout/:id">
           <Checkout/>
          </Route>
      </Routes>
        </>
    )
}