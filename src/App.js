import AllRoutes from './Routes/AllRoutes';
import {Navbar} from "./Navbar/Navbar";
 // import Routes from './Routes/AllRoutes'
import Footer from './Footer/Footer';
import AttractionIndex from "./components/Attractions/AttractionIndex";

function App() {
  return (
    <div className="App">
      <Navbar/>
       {/* <AllRoutes/> */}
      <AttractionIndex/>
      
      <Footer /> 
    </div>
  );
}

export default App;
