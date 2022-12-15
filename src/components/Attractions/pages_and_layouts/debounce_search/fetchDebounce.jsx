import axios from "axios"
import { debounceFetching,debounceFetchSuccess,debounceFetchFaliure } from "../../../../actions/debounceAction";
export  const  fetchDebounce=(query)=>{
     return async (dispach)=>{

          dispach(debounceFetching()); //loading..
          try{

               const responce= await axios.get(`http://localhost:8080/attractionsData?q=${query}`);
               console.log("Debounce",responce.data);

          dispach(debounceFetchSuccess(responce.data))//success

          }catch(error){
               dispach(debounceFetchFaliure(error))//error
          }



     }


}