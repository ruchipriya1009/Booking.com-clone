import axios from "axios"
import { Fetching,FetchSuccess, FetchFaliure} from "../../../actions/attractionAction";
import { singleCountryFetchFaliure, singleCountryFetching, singleCountryFetchSuccess } from "../../../actions/singleCountryFetchAction";
// import { Fetching ,FetchSuccess,FetchFaliure} from "../../../redux-all/attractons_page_nav/actions/action";

export  const  FetchApi=(query)=>{
     return async (dispach)=>{

          dispach(Fetching()); //loading..
          try{

               const responce= await axios.get(`http://localhost:8080/attractionsData?q=${query}`);
               console.log('responce',responce.data);

          dispach(FetchSuccess(responce.data))//success

          }catch(error){
               dispach(FetchFaliure(error))//error
               console.log('error');
          }



     }

     // return   axios.get(`https://api.github.com/search/repositories?q=${query}&page=0&per_page=10`)
}
export const filterFetch = ( {Tours,Landmarks,Activities,Museums},{less,greater},country ) => {
     let url = `http://localhost:8080/attractionsData?price_gte=${less}&price_lte=${greater}&country=${country}`
     if ( Tours || Landmarks || Activities || Museums )
          url=`http://localhost:8080/attractionsData?price_gte=${less}&price_lte=${greater}&category=${Tours?"Tours":""}&category=${Landmarks?"Landmarks":""}&category=${Activities?"Activities":""}&category=${Museums?"Museums":""}&country=${country}`;
     return async ( dispach ) => {

                dispach(Fetching()); //loading..
          try{

               const responce= await axios.get(url);
               console.log(responce.data);

          dispach(FetchSuccess(responce.data))//success

          }catch(error){
               dispach(FetchFaliure(error))//error
          }


     }
}


export const priceFilterFetch = ( less, greater, { Tours, Landmarks, Activities, Museums },country ) => {

     let url=`http://localhost:8080/attractionsData?price_gte=${less}&price_lte=${greater}&country=${country}`
     if ( Tours || Landmarks || Activities || Museums )
     url=`http://localhost:8080/attractionsData?price_gte=${less}&price_lte=${greater}&category=${Tours?"Tours":""}&category=${Landmarks?"Landmarks":""}&category=${Activities?"Activities":""}&category=${Museums?"Museums":""}&country=${country}`
     return async (dispach)=>{

          dispach(Fetching()); //loading..
          try{

               const responce= await axios.get(url);
               console.log(responce.data);

          dispach(FetchSuccess(responce.data))//success

          }catch(error){
               dispach(FetchFaliure(error))//error
          }



     }
}
export const idFetch = (id) => {

     let url=`http://localhost:8080/attractionsData/${id}`

     return async (dispach)=>{

          dispach(singleCountryFetching()); //loading..
          try{

               const responce= await axios.get(url);
               console.log("idFetch",responce.data);

          dispach(singleCountryFetchSuccess(responce.data))//success

          }catch(error){
               dispach(singleCountryFetchFaliure(error))//error
               console.log("idFetchError");
          }



     }
}